import { StateMachine } from '../GameStates/StateMachine';
import { Controls } from '../ObserverCheck/Controls';
import { Player } from '../Player/Player';
import { PlayerMovement, Vector } from '../Player/PlayerMovement';

export class Game
{
    //This Whole Class Serves as a Façade
    private static game: Game;

    private stateMachine: StateMachine;
    private controls: Controls;
    private player: Player;
    private playerMovement: PlayerMovement;

    private constructor()
    {
        //Define Controls and State
        this.stateMachine = StateMachine.GetInstance();
        this.controls     = Controls.GetInstance();

        //Define Controls Observers
        this.playerMovement = new PlayerMovement(new Vector(40, 80), this.controls);

        //Define Player-object
        this.player = new Player(this.playerMovement);
        console.log(this.player.Movement);

        //Perform State Changes
        this.stateMachine.CurrentState.LoadGame();
    }

    public static GetInstance(): Game
    {
        //Create New Instance if There is None
        if (!this.game) {
            this.game = new Game();
        }

        return this.game;
    }

    KeyInput(anInput: string): void
    {
        this.controls.KeyInput(anInput);
    }
}
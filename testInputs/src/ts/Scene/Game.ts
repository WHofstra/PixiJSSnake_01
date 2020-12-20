import { StateMachine } from '../GameStates/StateMachine';
import { Controls } from '../ObserverCheck/Controls';
import { ObjectPool, Player } from '../Pool/ObjectPool';
import { PlayerMovement, Vector } from '../Player/PlayerMovement';

const POOL_SIZE: number = 20;

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

        //Define Player Segments
        ObjectPool.Add(this.player, POOL_SIZE);

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
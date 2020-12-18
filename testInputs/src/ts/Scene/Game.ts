import { StateMachine } from '../GameStates/StateMachine';
import { Controls } from '../ObserverCheck/Controls';
import { PlayerMovement, Vector } from '../Player/PlayerMovement';

export class Game
{
    //This Class Serves as a Façade
    private stateMachine: StateMachine;
    private controls: Controls;
    private player: PlayerMovement;

    constructor()
    {
        //Define Controls and State
        this.stateMachine = new StateMachine();
        this.controls = new Controls();

        //Define Controls Observers
        this.player = new PlayerMovement(new Vector(40, 80), this.controls);
        this.player; //The Variable is Not Read in This Class Yet

        //Perform State Changes
        this.stateMachine.CurrentState.LoadGame();
    }

    KeyInput(anInput: string): void
    {
        this.controls.KeyInput(anInput);
    }
}
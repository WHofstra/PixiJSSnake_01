import { StateMachine } from './GameStates/StateMachine';
import { Controls } from './Controls';
import { PlayerMovement, Vector } from './Player/PlayerMovement';

export class Game
{
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
        this.stateMachine.CurrentState.Die();
        this.stateMachine.CurrentState.Die();
        this.stateMachine.CurrentState.LoadMenu();
    }

    KeyInput(anInput: string): void
    {
        this.controls.KeyInput(anInput);
    }
}
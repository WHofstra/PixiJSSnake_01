import { StateMachine } from "./StateMachine";

export class MenuState implements GameState
{
    private machine: StateMachine;

    constructor(aMachine: StateMachine) {
        this.machine = aMachine;
    }

    LoadMenu(): void
    {
        console.log("You are already in the main menu.");
    }

    LoadGame(): void
    {
        console.log("Starting game.");
        this.machine.CurrentState = this.machine.State[1];
    }

    Die(): void
    {
        console.log("You first need to start the game.");
    }

    ShowHighScores(): void
    {
        console.log("This is the highscore.");
        this.machine.CurrentState = this.machine.State[3];
    }
}
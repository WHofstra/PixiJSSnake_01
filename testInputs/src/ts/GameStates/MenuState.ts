import { StateMachine } from "./StateMachine";

export class MenuState implements GameState
{
    private static menu: MenuState;
    private machine: StateMachine;

    private constructor(aMachine: StateMachine) {
        this.machine = aMachine;
    }

    public static GetInstance(aMachine: StateMachine): MenuState
    {
        //Create New Instance if There is None
        if (!this.menu) {
            this.menu = new MenuState(aMachine);
        }

        return this.menu;
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
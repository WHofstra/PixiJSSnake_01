import { StateMachine } from "./StateMachine";

export class InGameState implements GameState
{
    private static inGame: InGameState;
    private machine: StateMachine;

    constructor(aMachine: StateMachine)
    {
        this.machine = aMachine;
    }

    public static GetInstance(aMachine: StateMachine): InGameState
    {
        //Create New Instance if There is None
        if (!this.inGame) {
            this.inGame = new InGameState(aMachine);
        }

        return this.inGame;
    }

    LoadMenu(): void
    {
        console.log("Going back to main menu.");
        this.machine.CurrentState = this.machine.State[0];
    }

    LoadGame(): void
    {
        console.log("You are currently in-game.");
    }

    Die(): void
    {
        console.log("You just died.");
        this.machine.CurrentState = this.machine.State[2];
    }

    ShowHighScores(): void
    {
        console.log("You cannot watch the highscore just yet.");
    }
}
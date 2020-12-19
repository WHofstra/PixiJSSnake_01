import { StateMachine } from "./StateMachine";

export class HighscoreState implements GameState
{
    private static highscore: HighscoreState;
    private machine: StateMachine;

    private constructor(aMachine: StateMachine) {
        this.machine = aMachine;
    }

    public static GetInstance(aMachine: StateMachine): HighscoreState
    {
        //Create New Instance if There is None
        if (!this.highscore) {
            this.highscore = new HighscoreState(aMachine);
        }

        return this.highscore;
    }

    LoadMenu(): void
    {
        console.log("Going back to main menu.");
        this.machine.CurrentState = this.machine.State[0];
    }

    LoadGame(): void
    {
        console.log("Replay.");
        this.machine.CurrentState = this.machine.State[1];
    }

    Die(): void
    {
        console.log("You need to replay first.");
    }

    ShowHighScores(): void
    {
        console.log("You are currently viewing the highscore.");
    }
}
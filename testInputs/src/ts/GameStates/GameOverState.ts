import { StateMachine } from "./StateMachine";

export class GameOverState implements GameState
{
    private static gameOver: GameOverState;
    private machine: StateMachine;

    private constructor(aMachine: StateMachine) {
        this.machine = aMachine;
    }

    public static GetInstance(aMachine: StateMachine): GameOverState
    {
        //Create New Instance if There is None
        if (!this.gameOver) {
            this.gameOver = new GameOverState(aMachine);
        }

        return this.gameOver;
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
        console.log("You are already dead.");
    }

    ShowHighScores(): void
    {
        console.log("Going to the highscore.");
        this.machine.CurrentState = this.machine.State[3];
    }
}
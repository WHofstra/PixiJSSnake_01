import { MenuState }      from "./MenuState";
import { InGameState }    from "./InGameState";
import { GameOverState }  from "./GameOverState";
import { HighscoreState } from "./HighscoreState";

export class StateMachine
{
    private static stateMachine: StateMachine

    private currentState: GameState;
    private state: Array<GameState> = [];

    private constructor()
    {
        //Define List of States
        this.state.push(MenuState.GetInstance(this));
        this.state.push(InGameState.GetInstance(this));
        this.state.push(GameOverState.GetInstance(this));
        this.state.push(HighscoreState.GetInstance(this));

        //Set Current State
        this.currentState = this.state[0];
    }

    public static GetInstance(): StateMachine
    {
        //Create New Instance if There is None
        if (!this.stateMachine) {
            this.stateMachine = new StateMachine();
        }

        return this.stateMachine;
    }

    public set CurrentState(aState: GameState) {
        this.currentState = aState;
    }

    public get CurrentState() {
        return this.currentState;
    }

    public get State() {
        return this.state;
    }
}
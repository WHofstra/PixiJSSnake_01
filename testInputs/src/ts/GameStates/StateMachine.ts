import { MenuState }      from "./MenuState";
import { InGameState }    from "./InGameState";
import { GameOverState }  from "./GameOverState";
import { HighscoreState } from "./HighscoreState";

export class StateMachine
{
    private currentState: GameState;
    private state: Array<GameState> = [];

    constructor()
    {
        //Define List of States
        this.state.push(new MenuState(this));
        this.state.push(new InGameState(this));
        this.state.push(new GameOverState(this));
        this.state.push(new HighscoreState(this));

        //Set Current State
        this.currentState = this.state[0];
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
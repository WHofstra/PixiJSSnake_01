import { StateMachine } from '../GameStates/StateMachine';
import { Controls } from '../ObserverCheck/Controls';
import { PlayerMovement, Vector } from '../Player/PlayerMovement';
import { SegmentFactory, Player } from '../CreationPatterns/SegmentFactory';
import { ObjectPool } from '../Pool/ObjectPool';
import { EdibleFactory } from '../CreationPatterns/EdibleFactory';

const POOL_SIZE: number = 50;

export class Game
{
    //This Whole Class Serves as a Façade
    private static game: Game;

    private playerFactory: Creator;
    private edibleFactory: Creator;

    private stateMachine: StateMachine;
    private controls: Controls;

    private player: Player;
    private playerMovement: PlayerMovement;
    private item: Product;

    private constructor()
    {
        //Set Controls and State
        this.stateMachine = StateMachine.GetInstance();
        this.controls     = Controls.GetInstance();

        //Set Controls Observers
        this.playerMovement = new PlayerMovement(new Vector(40, 80), this.controls);

        //Set Player-object
        this.player = new Player(this.playerMovement);
        console.log(this.player.Movement);

        //Set Player Segments
        this.playerFactory = new SegmentFactory(this.player);
        this.FillPool(POOL_SIZE);

        //Set Items
        this.edibleFactory = new EdibleFactory();
        this.item = this.edibleFactory.CreateObject();
        console.log(this.item); //Preventing Error

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

    private FillPool(amount: number): void
    {
        //Add Created Objects to Pool
        for (var i = 0; i < amount; i++) {
            ObjectPool.Add(this.playerFactory.CreateObject());
        }
    }

    KeyInput(anInput: string): void
    {
        this.controls.KeyInput(anInput);
    }
}
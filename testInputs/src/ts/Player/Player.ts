import { PlayerMovement } from "./PlayerMovement";

export class Player implements Subject
{
    private movement: PlayerMovement;
    private children: Array<Observer> = [];

    constructor(movement: PlayerMovement)
    {
        this.movement = movement;
    }

    public get Movement(): PlayerMovement {
        return this.movement;
    }

    Register(aChild: Observer): void
    {
        this.children.push(aChild);
    }

    Unregister(aChild: Observer): void
    {
        let index: number;
        index = this.children.indexOf(aChild);
        this.children.splice(index, 1);
    }

    Notify(): void
    {
        //To be Added: Delay Comparable to Velocity
        this.children.forEach(element => {
            element.Update();
        });
    }
}
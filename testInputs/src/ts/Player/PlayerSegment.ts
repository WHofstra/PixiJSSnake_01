import { CollisionObject, Vector } from "../ObjectBaseClasses/CollisionObject";
import { Player } from "./Player";

export class PlayerSegment extends CollisionObject implements Observer, PooledObject
{
    protected velocity: Vector;

    constructor(aPosition: Vector, parent: Player)
    {
        super(aPosition);

        parent.Register(this);
        this.velocity = parent.Movement.Velocity;
    }

    Update(): void
    {
        /*let velocity = anObject;

        if (velocity != null) {
            this.position.Set(velocity.X, velocity.Y);
        }*/
    }
}
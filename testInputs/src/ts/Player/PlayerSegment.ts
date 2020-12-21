import { CollisionObject, Vector } from "../ObjectBaseClasses/CollisionObject";
import { Player } from "./Player";
export { Player, Vector }

export class PlayerSegment extends CollisionObject implements Product, Observer
{
    protected velocity: Vector;

    constructor(aPosition: Vector, parent: Player)
    {
        super(aPosition);

        parent.Register(this);
        this.velocity = parent.Movement.Velocity;
    }

    Flush(): void
    {
        this.position.Set(0, 0);
        this.velocity.Set(0, 0);
    }

    Update(): void
    {
        /*let velocity = anObject;

        if (velocity != null) {
            this.position.Set(velocity.X, velocity.Y);
        }*/
    }
}
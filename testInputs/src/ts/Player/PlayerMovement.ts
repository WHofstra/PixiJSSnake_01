import { GameObject, Vector } from '../ObjectBaseClasses/GameObject';
import { Controls } from '../ObserverCheck/Controls';
export { Vector };

const SPEED: number = 30.0;

export class PlayerMovement extends GameObject implements Observer
{
    protected velocity: Vector;

    constructor(aPosition: Vector, controls: Controls)
    {
        super(aPosition);
        this.velocity = new Vector(SPEED, 0);

        //Assign Observers to Controls
        controls.Register(this);
    }

    public get Velocity() {
        return this.velocity;
    }

    Update(): void
    {
        /*console.log("Player moved to (" + this.position.X + ", " + this.position.Y +
                                   ", " + this.position.Z + ").");*/
    }
}
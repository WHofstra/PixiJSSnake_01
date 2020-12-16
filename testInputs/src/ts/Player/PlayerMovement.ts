import { GameObject, Vector } from '../ObjectBaseClasses/GameObject';
import { Controls }           from '../Controls';
export { Vector };

export class PlayerMovement extends GameObject implements Observer
{
    constructor(aPosition: Vector, controls: Controls)
    {
        super(aPosition);

        //Assign Observers to Controls
        controls.Register(this);
    }

    Update(): void
    {
        console.log("Player moved to (" + this.position.X + ", " + this.position.Y +
                                   ", " + this.position.Z + ").");
    }
}
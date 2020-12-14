import { Vector } from './Vector';

export class PlayerMovement implements Observer
{
    private position = new Vector(4, 4);

    Update(): void
    {
        console.log("Player moved to (" + this.position.X + ", " + this.position.Y +
                                   ", " + this.position.Z + ").");
    }
}
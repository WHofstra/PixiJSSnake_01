import { Vector } from '../VariableLists/Vector';
export { Vector };

export class GameObject
{
    protected position;

    constructor(aPosition: Vector)
    {
        this.position = aPosition;
    }

    public get Position() {
        return this.position;
    }
}
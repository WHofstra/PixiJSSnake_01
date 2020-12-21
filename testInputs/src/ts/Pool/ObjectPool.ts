import { PlayerSegment, Player } from "../Player/PlayerSegment";
export { Player };

export class ObjectPool
{
    private static available: Array<Product> = [];
    private static inUse: Array<Product> = [];

    public static Add(anObject: Product): void
    {
        this.available.push(anObject);
    }

    public static GetObject(parent: Player): Product
    {
        let poolObj;

        if (this.available.length > 0)
        {
            poolObj = this.available[0];
            this.inUse.push(poolObj);
            this.available.shift();
        }
        else
        {
            poolObj = new PlayerSegment(parent.Movement.Velocity, parent);
            this.inUse.push(poolObj);
        }

        return poolObj;
    }

    public static ReleaseObject(anObject: Product): void
    {
        let index: number;

        this.CleanUp(anObject);
        this.available.push(anObject);

        index = this.inUse.indexOf(anObject);
        if (index != null) {
            this.inUse.splice(index, 1);
        }
    }

    private static CleanUp(anObject: Product): void
    {
        if (anObject instanceof PlayerSegment) {
            anObject.Flush();
        }
    }
}
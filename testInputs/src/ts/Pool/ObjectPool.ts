import { PlayerSegment, Player, Vector } from "../Player/PlayerSegment";
export { Player };

export class ObjectPool
{
    private static available: Array<PooledObject> = [];
    private static inUse: Array<PooledObject> = [];

    public static Add(parent: Player, aSize: number): void
    {
        for (var i = 0; i < aSize; i++) {
            this.available.push(new PlayerSegment(new Vector(0, 0), parent));
        }
    }

    public static GetObject(parent: Player): PooledObject
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

    public static ReleaseObject(anObject: PooledObject): void
    {
        let index: number;

        this.CleanUp(anObject);
        this.available.push(anObject);

        index = this.inUse.indexOf(anObject);
        if (index != null) {
            this.inUse.splice(index, 1);
        }
    }

    private static CleanUp(anObject: PooledObject): void
    {
        if (anObject instanceof PlayerSegment) {
            anObject.Flush();
        }
    }
}
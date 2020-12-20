export class Vector
{
    private x: number;
    private y: number;
    private z: number;

    constructor(xValue: number, yValue: number, zValue: number = 0)
    {
        this.x = xValue;
        this.y = yValue;
        this.z = zValue;
    }

    public get X() {
        return this.x;
    }

    public get Y() {
        return this.y;
    }

    public get Z() {
        return this.z;
    }

    public set X(value: number) {
        this.x = value;
    }

    public set Y(value: number) {
        this.y = value;
    }

    public set Z(value: number) {
        this.z = value;
    }

    Set(X: number, Y: number, Z: number = 0): void
    {
        this.x = X;
        this.y = Y;
        this.z = Z;
    }
}
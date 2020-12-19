export class Controls implements Subject
{
    private static controls: Controls;

    private observerList: Array<Observer> = [];
    private input: string;

    private constructor()
    {
        this.input = "";
    }

    public static GetInstance(): Controls
    {
        //Create New Instance if There is None
        if (!this.controls) {
            this.controls = new Controls();
        }

        return this.controls;
    }

    Register(anObserver: Observer): void
    {
        this.observerList.push(anObserver);
    }

    Unregister(anObserver: Observer): void
    {
        let index: number;
        index = this.observerList.indexOf(anObserver);
        this.observerList.splice(index, 1);
    }

    Notify(): void
    {
        this.observerList.forEach(element => {
            element.Update();
        });
    }

    KeyInput(anInput: string): void
    {
        this.input = anInput;
        console.log(this.input + " is pressed.");
        this.Notify();
    }
}
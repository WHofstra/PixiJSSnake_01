export class Controls implements Subject
{
    private observerList: Array<Observer> = [];
    private input: string;

    constructor()
    {
        this.input = "";
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
    }
}
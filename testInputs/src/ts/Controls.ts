export class Controls implements Subject
{
    private observerList: Array<Observer> = []

    constructor() {}

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
        
    }
    
}
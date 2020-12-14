interface Subject
{
    Register(anObserver: Observer): void;
    Unregister(anObserver: Observer): void;
    Notify(): void;
}
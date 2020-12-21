import { Adaptee } from "./Adaptee";

export class Adapter implements Target
{
    RequestConnection(): string
    {
        return Adaptee.RequestQuestions();
    }
}
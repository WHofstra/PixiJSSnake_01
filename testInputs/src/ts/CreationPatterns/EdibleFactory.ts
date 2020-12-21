import { Edible } from "../Items/Edible";
export { Edible };

export class EdibleFactory implements Creator
{
    CreateObject(): Product
    {
        return new Edible();
    }
}
import { PlayerSegment, Player } from "../Player/PlayerSegment";
export { Player };

export class SegmentFactory implements Creator
{
    private parent: Player;

    constructor(parent: Player)
    {
        this.parent = parent;
	}

    CreateObject(): Product
    {
        return new PlayerSegment(this.parent.Movement.Position, this.parent);
    }
}
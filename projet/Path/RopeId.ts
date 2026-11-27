import { v4 } from 'uuid';

export class RopeId
{
    private Id : string

    private constructor(uuid : string)
    {
        this.Id = uuid;
    }

    public static Creer() : RopeId {
        return new RopeId(v4())
    }
}

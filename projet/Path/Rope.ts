import {Month} from "../shared/Month.ts"
import { Age } from "../shared/Age.ts"
import { RopeId } from "./RopeId.ts"

class Rope {

    private RopeId : RopeId ;

    private LastChecked : Month;

    private Age : Age;

    private IsDamaged : boolean;

    private constructor(ropeId : RopeId, lastChecked : Month, age : Age, isDamaged : boolean)
    {
        this.RopeId = ropeId;
        this.LastChecked = lastChecked;
        this.Age = age;
        this.IsDamaged = isDamaged;
    }

    public Creer(lastChecked : Month, age : Age)
    {
        return new Rope(RopeId.Creer(), lastChecked, age, false);
    }
}
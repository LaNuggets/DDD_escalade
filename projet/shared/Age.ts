export class Age
{
    private Year : number | null;
    private Hours : number | null;

    private constructor(years : number | null, hours : number | null)
    {
        this.Year = years;
        this.Hours = hours;
    }

    public Creer(years : number | null, hours : number | null) : Age {
        return new Age(years, hours);
    }
}
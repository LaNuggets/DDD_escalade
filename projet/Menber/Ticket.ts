
export default class Ticket {
    BuyDate : Date;
    LimitDate : Date;
    ComposeDate : Date | null = null;
    IsExpired : boolean = false;

    public constructor() {
        this.BuyDate = new Date();
        this.LimitDate = new Date(this.BuyDate.getTime());
        this.LimitDate.setDate(this.LimitDate.getDate() + 360);
    }

    public ComposeTicket() : void {
        this.ComposeDate = new Date();
    }
}
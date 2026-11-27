import Booking from "./Booking";
import Ticket from "./Ticket";

export default class Menber {

    public FirstName : string = "";
    public LastName : string = "";
    private Bookings : Booking[] = [];
    private Tickets : Ticket[] = [];

    public CreateMenber(firstName : string, lastName : string) : void {
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    public AddBooking(year: number, month: number, day: number, hour: number, minute: number) : void {
        var newBooking = new Booking(new Date(year, month, day, hour, minute));
        this.Bookings.push(newBooking);
    }

    public AddTicket(number : number) : void {
        for (var index = 0; index < number; index++) {
            var newTicket = new Ticket();
            this.Tickets.push(newTicket);
        }
    }

    public ComposeTicket() : void {
        for (var index = 0; index < this.Tickets.length; index++) {
            if (this.Tickets[index].ComposeDate != null && this.Tickets[index].LimitDate.getTime() < Date.now()) {
                this.Tickets[index].ComposeTicket();
                break;
            }
            else if (this.Tickets[index].ComposeDate != null){
                this.Tickets[index].ComposeTicket();
                this.Tickets[index].IsExpired = true;
            }
        }
    }
}
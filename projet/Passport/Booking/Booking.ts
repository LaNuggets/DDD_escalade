import BookingUuid from "./BookingUuid";
import MemberUuid from "../../Member/MemberUuid";

export default class Booking {
    bookingUuid : BookingUuid;
    date : Date;
    hour : number; // a number between 0 and 24
    memberUuid : MemberUuid;

    constructor(bookingUuid : BookingUuid, date : Date, hour : number, memberUuid : MemberUuid) {
        this.bookingUuid = bookingUuid;
        this.date = date;
        this.hour = hour;
        this.memberUuid = memberUuid;
    }
}
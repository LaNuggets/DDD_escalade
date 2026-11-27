

export default class BookingUuid {
    uuid : string;

    constructor(uuid: string) {
        if (uuid != null) {
            this.uuid = uuid;
        } else {
            throw console.error("BookingUuid can't be null !");
        }
    }
}
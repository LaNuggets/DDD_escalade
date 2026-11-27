


export default class PassportUuid {
    uuid : string;

    constructor(uuid: string) {
        if (uuid != null) {
            this.uuid = uuid;
        } else {
            throw console.error("PassportUuid can't be null !");
        }
    }
}
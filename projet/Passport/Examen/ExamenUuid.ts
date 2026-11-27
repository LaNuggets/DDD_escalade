
export default class ExamenUuid {
    uuid : string;

    constructor(uuid: string) {
        if (uuid != null) {
            this.uuid = uuid;
        } else {
            throw console.error("ExamenUuid can't be null !");
        }
    }
}

export default class InstructorUuid {
    uuid : string;

    constructor(uuid: string) {
        if (uuid != null) {
            this.uuid = uuid;
        } else {
            throw console.error("InstructorUuid cant be null !");
        }
    }
}
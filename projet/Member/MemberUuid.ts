
export default class MemberUuid {
    uuid : string;

    constructor(uuid: string) {
        if (uuid != null) {
            this.uuid = uuid;
        } else {
            throw console.error("MemberUuid can't be null !");
        }
    }
}
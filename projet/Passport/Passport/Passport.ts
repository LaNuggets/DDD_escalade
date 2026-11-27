import PassportUuid from "./PassportUuid";
import MemberUuid from "../../Member/MemberUuid";


export default class Passport {
    passportUuid : PassportUuid;
    memberUuid : MemberUuid;

    constructor(passportUuid : PassportUuid, memberUuid : MemberUuid) {
        this.passportUuid = passportUuid;
        this.memberUuid = memberUuid;
    }
}
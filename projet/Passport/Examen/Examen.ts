import MemberUuid from "../../Member/MemberUuid";
import InstructorUuid from "../Instructor/InstructorUuid";
import ExamenUuid from "./ExamenUuid";


export default class Examen {
    examenUuid : ExamenUuid;
    instructorUuid : InstructorUuid;
    memberId : MemberUuid;

    constructor(examenUuid : ExamenUuid, instructorUuid : InstructorUuid, memberId : MemberUuid) {
        this.examenUuid = examenUuid;
        this.instructorUuid = instructorUuid;
        this.memberId = memberId;
    }
}
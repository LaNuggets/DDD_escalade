import InstructorName from "./InstructorName";
import InstructorUuid from "./InstructorUuid";


export default class Instructor {
    instructorUuid : InstructorUuid;
    name : InstructorName;

    constructor(instructorUuid : InstructorUuid, name : InstructorName) {
        this.instructorUuid = instructorUuid;
        this.name = name;
    }
}

export default class InstructorName {
    name : string;

    constructor(name: string) {
        if (name != null) {
            this.name = name;
        } else {
            throw console.error("InstructorName cant be null !");
        }
    }
}
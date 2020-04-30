import { User } from "./User";
import { TEACHER_SPECIALITY } from "./EnumTeacherSpeciality"


export class Teacher implements User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public especialities: TEACHER_SPECIALITY[]
    ) {}
}
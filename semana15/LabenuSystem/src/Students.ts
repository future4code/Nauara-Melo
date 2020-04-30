import * as moment from 'moment';
import { User } from "./User";

export class Student implements User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[],
    ) {}

    public getAge(): number{
        return moment().diff(this.birthDate, "years")
    }


}
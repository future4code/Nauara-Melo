import moment = require("moment")
import { Teacher } from "./Teacher";
import { Student } from "./Students";

export abstract class Mission {
    private name: string = "";

    constructor(
        private id: number,
        private startDate: moment.Moment,
        private endDate: moment.Moment,
        private teachers: Teacher[] = [],
        private students: Student[] = [],
        private currentModule: number = undefined, 
    ) {}
   
    public getName(name: string): string{
        return this.name
    }

    public getId(): number{
        return this.id
    }

    public getStartDate(): moment.Moment{
        return this.startDate
    }

    public getEndDate(): moment.Moment{
        return this.endDate
    }

    public addTeacher(teatcher: Teacher){
        this.teachers.push(teatcher)
    }

    public addStudent(student: Student){
        this.students.push(student)
    }

    public getCurrentModule(): number | undefined {
        return this.currentModule;
    }

    public setName(name: string){
        this.name = name
    }
}
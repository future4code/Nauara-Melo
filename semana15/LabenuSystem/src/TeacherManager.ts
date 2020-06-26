import { FileManager } from './FileManager'
import { Teacher } from './Teacher';

export class TeacherManager {
    constructor(
        private fileManager: FileManager = new FileManager('teachers.json'),
        private teachers: Teacher[] = []
    ) {}

    public getTeacher(): Teacher[] {
        return this.teachers
    }

    public addTeacher(teacher: Teacher): void {
        this.teachers.push(teacher)
    }

    public setTeachers(teachers: Teacher[]): void {
        this.teachers = teachers;
    }

    public saveTeacherInJson(): void {
        this.fileManager.writeFile(this.teachers)
    }
}
import { FileManager } from './FileManager'
import { Student } from './Students';

export class StudentManager {
    constructor(
        private fileManager: FileManager = new FileManager('students.json'),
        private students: Student[] = []
    ) {}

    public getStudents(): Student[] {
        return this.students
    }

    public addStudent(student: Student): void {
        this.students.push(student)
    }

    public setStudents(students: Student[]): void {
        this.students = students;
    }

    public saveStudentInJson(): void {
        this.fileManager.writeFile(this.students)
    }

    public getAgeStudentById(id: number): number {
        for (const student of this.students) {
            if (student.id === id) {
                return student.getAge()
            }
        }
    }
}
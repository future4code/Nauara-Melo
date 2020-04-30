"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileManager_1 = require("./FileManager");
class StudentManager {
    constructor(fileManager = new FileManager_1.FileManager('students.json'), students = []) {
        this.fileManager = fileManager;
        this.students = students;
    }
    getStudents() {
        return this.students;
    }
    addStudent(student) {
        this.students.push(student);
    }
    setStudents(students) {
        this.students = students;
    }
    saveStudentInJson() {
        this.fileManager.writeFile(this.students);
    }
    getAgeStudentById(id) {
        for (const student of this.students) {
            if (student.id === id) {
                return student.getAge();
            }
        }
    }
}
exports.StudentManager = StudentManager;
//# sourceMappingURL=StudentManager.js.map
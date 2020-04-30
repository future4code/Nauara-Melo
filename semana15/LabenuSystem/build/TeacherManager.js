"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileManager_1 = require("./FileManager");
class TeacherManager {
    constructor(fileManager = new FileManager_1.FileManager('teachers.json'), teachers = []) {
        this.fileManager = fileManager;
        this.teachers = teachers;
    }
    getTeacher() {
        return this.teachers;
    }
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }
    setTeachers(teachers) {
        this.teachers = teachers;
    }
    saveTeacherInJson() {
        this.fileManager.writeFile(this.teachers);
    }
}
exports.TeacherManager = TeacherManager;
//# sourceMappingURL=TeacherManager.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mission {
    constructor(id, startDate, endDate, teachers = [], students = [], currentModule = undefined) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.name = "";
    }
    getName(name) {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    addTeacher(teatcher) {
        this.teachers.push(teatcher);
    }
    addStudent(student) {
        this.students.push(student);
    }
    getCurrentModule() {
        return this.currentModule;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileManager_1 = require("./FileManager");
class MissionManager {
    constructor(fileManager = new FileManager_1.FileManager('missions.json'), missions = []) {
        this.fileManager = fileManager;
        this.missions = missions;
    }
    getMission() {
        return this.missions;
    }
    addMission(mission) {
        this.missions.push(mission);
    }
    saveMissionInJson() {
        this.fileManager.writeFile(this.missions);
    }
    addStudentInMission(student, idMission) {
        const mission = this.getMissionById(idMission);
        mission.addStudent(student);
    }
    addTeacherInMission(teacher, idMission) {
        const mission = this.getMissionById(idMission);
        mission.addTeacher(teacher);
    }
    setMissions(missions) {
        this.missions = missions;
    }
    getMissionById(id) {
        return this.missions.find(mission => mission.getId() === id);
    }
}
exports.MissionManager = MissionManager;
//# sourceMappingURL=MissionManager.js.map
import { FileManager } from './FileManager'
import { Mission } from './Mission';
import { Student } from './Students';
import { Teacher } from './Teacher';

export class MissionManager {
    constructor(
        private fileManager: FileManager = new FileManager('missions.json'),
        private missions: Mission[] = []
    ) {}

    public getMission(): Mission[] {
        return this.missions
    }

    public addMission(mission: Mission): void {
        this.missions.push(mission)
    }

    public saveMissionInJson(): void {
        this.fileManager.writeFile(this.missions)
    }

    public addStudentInMission(student: Student, idMission: number): void {
        const mission = this.getMissionById(idMission);
        mission.addStudent(student)
    }

    public addTeacherInMission(teacher: Teacher, idMission: number): void {
        const mission = this.getMissionById(idMission);
        mission.addTeacher(teacher)
    }

    public setMissions(missions: Mission[]): void {
        this.missions= missions;
    }

    private getMissionById(id: number): Mission {
        return this.missions.find(mission => mission.getId() === id);
    }
}
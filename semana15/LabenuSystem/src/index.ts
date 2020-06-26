import { Student } from "./Students";
import moment = require("moment");
import { Teacher } from "./Teacher";
import { TEACHER_SPECIALITY } from "./EnumTeacherSpeciality"
import { NightMission } from "./NightMission";
import { FullTimeMission } from "./FulltimeMission";
import { FileManager } from "./FileManager"
import { StudentManager } from "./StudentManager"
import { TeacherManager } from "./TeacherManager"
import { MissionManager } from "./MissionManager"

const studentManager = new StudentManager()
const teacherManager = new TeacherManager()
const missionManager = new MissionManager()

//Students
const student = new Student(
    1,
    'Filomena Filó',
    'aristidinha@gmail.com',
    moment("14/05/1989", "DD/MM/YYYY"),
    ['abrir atendimento', 'estudar 15 horas/dia']
)

const student2 = new Student(
    2,
    'Ariosvaldo',
    'ari@gmail.com',
    moment("29/03/1990", "DD/MM/YYYY"),
    ['Competir com a Filó', 'Ler', 'Ouvir música']
)

studentManager.setStudents([student, student2])

//Criar estudantes no json
studentManager.saveStudentInJson()
console.log('Estudantes salvos com sucesso em nossa base de dados!')

//Teachers
const teacherBananinha = new Teacher(1, 'Bananinha', 'bananinha@hotmail.com', [TEACHER_SPECIALITY.REACT, TEACHER_SPECIALITY.REDUX])
const teacherEdwiges = new Teacher(2, 'Edwiges', 'ed@hotmail.com', [TEACHER_SPECIALITY.OOP, TEACHER_SPECIALITY.BACKEND])
const teacherPlatypus = new Teacher(3, 'Platypus', 'pédefeijão@gmail.com', [TEACHER_SPECIALITY.TYPESCRIPT, TEACHER_SPECIALITY.OOP])
const teacherOi = new Teacher(4, 'Oi', 'azul@hotmail.com', [TEACHER_SPECIALITY.TESTES, TEACHER_SPECIALITY.REDUX])

teacherManager.setTeachers([teacherBananinha, teacherOi, teacherPlatypus, teacherEdwiges])

//Criar Professores no json
teacherManager.saveTeacherInJson()
console.log('Professores salvos com sucesso em nossa base de dados!')

//Missions
const missionX = new FullTimeMission(1, moment("13/01/2020", "DD/MM/YYYY"), moment("13/07/2020", "DD/MM/YYYY"))
const missionY = new NightMission(2, moment("23/03/2020", "DD/MM/YYYY"), moment("23/09/2020", "DD/MM/YYYY"))

missionX.setName('Sagan Mission')
missionY.setName('bouman-na-night')

missionManager.setMissions([missionX, missionY])

// Adicionar estudante na missao X
missionManager.addStudentInMission(student, missionX.getId())

// Adicionar estudante na missao Y
missionManager.addStudentInMission(student, missionY.getId())


// Adicionar Professores na missao X
missionManager.addTeacherInMission(teacherOi, missionX.getId())
missionManager.addTeacherInMission(teacherPlatypus, missionX.getId())

// Adicionar Professores na missao Y
missionManager.addTeacherInMission(teacherEdwiges, missionY.getId())
missionManager.addTeacherInMission(teacherBananinha, missionY.getId())

// Salvar Missões no json
missionManager.saveMissionInJson()
console.log('Missões cadastradas em nossa base de dados!')


// Obter aluno pelo id
console.log(`Obtendo a idade do usuario cujo id é 2... Idade do aluno: ${studentManager.getAgeStudentById(2)}`)

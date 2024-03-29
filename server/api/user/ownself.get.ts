import {PrismaClient} from "@prisma/client";
import {PermissionsEnum} from "~/server/services/userService";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.ReadOwnSelf])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const payload = verifyToken(<string>getHeader(event, 'Authorization'))
    if (!payload){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }

    const user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        },
        select: {
            pseudo: true,
            role: true,
            password: false,
            createdAt: true,
            updatedAt: true,
            GradeGroup: false
        }
    });
    if (!user){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }

    const userAcademicYears = await prisma.academicYear.findMany({
        select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            Semester: {
                select: {
                    id: true,
                    name: true,
                    idAcademicYear: false,
                    createdAt: true,
                    updatedAt: true,
                    Unit: {
                        select: {
                            id: true,
                            name: true,
                            coefficient: true,
                            idSemester: false,
                            createdAt: true,
                            updatedAt: true,
                            PoleAverage: {
                                select: {
                                    id: true,
                                    name: true,
                                    idUnit: false,
                                    coefficient: true,
                                    createdAt: true,
                                    updatedAt: true,
                                    Subject: {
                                        select: {
                                            id: true,
                                            name: true,
                                            coefficient: true,
                                            idPoleAverage: false,
                                            createdAt: true,
                                            updatedAt: true,
                                            GradeGroup: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    coefficient: true,
                                                    idSubject: false,
                                                    idUser: false,
                                                    createdAt: true,
                                                    updatedAt: true,
                                                    Grade: {
                                                        select: {
                                                            id: true,
                                                            value: true,
                                                            coefficient: true,
                                                            idGradeGroup: false,
                                                            createdAt: true,
                                                            updatedAt: true,
                                                        }
                                                    }
                                                },
                                                where: {
                                                    idUser: payload.user_id
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    interface Grade {
        id: number,
        value: number,
        coefficient: number,
        createdAt: Date,
        updatedAt: Date,
    }

    interface GradeGroup {
        id: number,
        name: string,
        coefficient: number,
        average?: number | null,
        createdAt: Date,
        updatedAt: Date,
        Grade: Grade[]
    }

    interface Subject {
        id: number,
        name: string,
        coefficient: number,
        average?: number | null,
        createdAt: Date,
        updatedAt: Date,
        GradeGroup: GradeGroup[]
    }

    interface PoleAverage {
        id: number,
        name: string,
        coefficient: number,
        average?: number | null,
        createdAt: Date,
        updatedAt: Date,
        Subject: Subject[]
    }

    interface Unit {
        id: number,
        name: string,
        average?: number | null,
        coefficient: number,
        createdAt: Date,
        updatedAt: Date,
        PoleAverage: PoleAverage[]
    }

    interface Semester {
        id: number,
        name: string,
        average?: number | null,
        bonus?: number | null,
        malus?: number | null,
        createdAt: Date,
        updatedAt: Date,
        Unit: Unit[]
    }

    interface AcademicYear {
        id: number,
        name: string,
        createdAt: Date,
        updatedAt: Date,
        Semester: Semester[]
    }


    await Promise.all(userAcademicYears.map(async (academicYear: AcademicYear) => {
        await Promise.all(academicYear.Semester.map(async (semester: Semester) => {
            let unitTotal = 0;
            let unitTotalCoefficient = 0;
            semester.Unit.forEach((unit: Unit) => {
                let polesTotal = 0;
                let polesTotalCoefficient = 0;
                unit.PoleAverage.forEach((pole: PoleAverage) => {
                    let subjectsTotal = 0;
                    let subjectsTotalCoefficient = 0;
                    pole.Subject.forEach((subject: Subject) => {
                        let gradeGroupsTotal = 0;
                        let gradeGroupsTotalCoefficient = 0;
                        subject.GradeGroup.forEach((gradeGroup: GradeGroup) => {
                            let gradesTotal = 0;
                            let gradesTotalCoefficient = 0;
                            gradeGroup.Grade.forEach((grade: Grade) => {
                                if (grade.value  !== null && grade.coefficient  !== null){
                                    gradesTotal += grade.value * grade.coefficient;
                                    gradesTotalCoefficient += grade.coefficient;
                                }
                            });
                            if (gradesTotalCoefficient === 0) {
                                gradeGroup.average = null;
                            } else {
                                gradeGroup.average = gradesTotal / gradesTotalCoefficient;
                            }
                            if (gradeGroup.average  !== null){
                                gradeGroupsTotal += gradeGroup.average * gradeGroup.coefficient;
                                gradeGroupsTotalCoefficient += gradeGroup.coefficient;
                            }
                        });
                        if (gradeGroupsTotalCoefficient === 0) {
                            subject.average = null;
                        } else {
                            subject.average = gradeGroupsTotal / gradeGroupsTotalCoefficient;
                        }
                        if (subject.average !== null){
                            subjectsTotal += subject.average * subject.coefficient;
                            subjectsTotalCoefficient += subject.coefficient;
                        }
                    });
                    if (subjectsTotalCoefficient === 0) {
                        pole.average = null;
                    } else {
                        pole.average = subjectsTotal / subjectsTotalCoefficient;
                    }
                    if (pole.average !== null){
                        polesTotal += pole.average * pole.coefficient;
                        polesTotalCoefficient += pole.coefficient;
                    }
                });
                if (polesTotalCoefficient === 0) {
                    unit.average = null;
                } else {
                    unit.average = polesTotal / polesTotalCoefficient;
                }
                if (unit.average !== null){
                    unitTotal += unit.average * unit.coefficient;
                    unitTotalCoefficient += unit.coefficient;
                }
            });
            if (unitTotalCoefficient === 0) {
                semester.average = null;
            } else {
                semester.average = unitTotal / unitTotalCoefficient;
            }
            const semesterModifiers = await prisma.userSemester.findMany(
                {
                    select: {
                        bonus: true,
                        malus: true
                    },
                    where: {
                        idUser: payload.user_id,
                        idSemester: semester.id
                    }
                }
            );
            if (semesterModifiers.length > 0) {
                if (semesterModifiers[0].bonus !== null) {
                    semester.bonus = semesterModifiers[0].bonus;
                }
                if (semesterModifiers[0].malus !== null) {
                    semester.malus = semesterModifiers[0].malus;
                }
            } else {
                semester.bonus = 0;
                semester.malus = 0;
            }
        }));
    }));

    setResponseStatus(event, 200, 'User data');
    return {user, userAcademicYears};
});
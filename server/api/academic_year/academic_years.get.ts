import {PrismaClient} from '@prisma/client';
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.ReadAll, PermissionsEnum.ReadAcademicYears])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    setResponseStatus(event, 200);
    return prisma.academicYear.findMany({
        select: {
            id: true,
            name: true,
            createdAt: true,
            updatedAt: true,
            Semester: {
                select: {
                    id: true,
                    name: true,
                    createdAt: true,
                    updatedAt: true,
                    idAcademicYear: false,
                    academicYear: false,
                    Unit: {
                        select: {
                            id: true,
                            name: true,
                            coefficient: true,
                            createdAt: true,
                            updatedAt: true,
                            idSemester: false,
                            semester: false,
                            PoleAverage: {
                                select: {
                                    id: true,
                                    name: true,
                                    coefficient: true,
                                    createdAt: true,
                                    updatedAt: true,
                                    idUnit: false,
                                    unit: false,
                                    Subject: {
                                        select: {
                                            id: true,
                                            name: true,
                                            coefficient: true,
                                            createdAt: true,
                                            updatedAt: true,
                                            idPoleAverage: false,
                                            PoleAverage: false,
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
})
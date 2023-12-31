import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateSemesters])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.name || !body.idAcademicYear) {
        setResponseStatus(event, 422, 'Invalid body error {name, idAcademicYear}');
        return;
    }
    const semester = await prisma.semester.create({
        data: {
            name: body.name,
            idAcademicYear: body.idAcademicYear
        }
    });
    if (!semester){
        setResponseStatus(event, 503, 'An error occurred while creating the semester');
        return;
    }
    setResponseStatus(event, 201, 'Semester created');
    return semester;
});
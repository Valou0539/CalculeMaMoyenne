import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateSemesters])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.name || !body.id_academic_year) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const semester = await prisma.semester.create({
        data: {
            name: body.name,
            idAcademicYear: body.id_academic_year
        }
    });
    if (!semester){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Semester created'};
});
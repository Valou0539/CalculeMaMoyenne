import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteAcademicYears])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 422, 'Missing body parameter {id}');
        return;
    }
    if (!await prisma.academicYear.findUnique({
        where: {
            id: body.id
        }
    })){
        setResponseStatus(event, 404, 'Academic year not found');
        return;
    }
    const academic_year = await prisma.academicYear.delete({
        where: {
            id: body.id
        }
    });
    if (!academic_year){
        setResponseStatus(event, 503, 'An error occurred while deleting the academic year');
        return;
    }
    setResponseStatus(event, 200, 'Academic year deleted');
    return;
});
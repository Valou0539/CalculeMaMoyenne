import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateAcademicYears])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id || !body.name) {
        setResponseStatus(event, 422, 'Invalid body error {id, name}');
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
    const academic_year = await prisma.academicYear.update({
        where: {
            id: body.id
        },
        data: {
            name: body.name
        }
    });
    if (!academic_year){
        setResponseStatus(event, 503, 'An error occurred while updating the academic year');
        return;
    }
    setResponseStatus(event, 200, 'Academic year updated');
    return;
});
import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteSemesters])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 422, 'Invalid body error {id}');
        return;
    }
    if (!await prisma.semester.findUnique({
        where: {
            id: body.id
        }
    })){
        setResponseStatus(event, 404, 'Semester not found');
        return;
    }
    const semester = await prisma.semester.delete({
        where: {
            id: body.id
        }
    });
    if (!semester){
        setResponseStatus(event, 503, 'An error occurred while deleting the semester');
        return;
    }
    setResponseStatus(event, 204, 'Semester deleted');
    return;
});
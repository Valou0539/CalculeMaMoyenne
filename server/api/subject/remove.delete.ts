import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteSubjects])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 422, 'Invalid body error {id}');
        return;
    }
    if (!await prisma.subject.findUnique({
        where: {
            id: body.id
        }
    })){
        setResponseStatus(event, 404, 'Subject not found');
        return;
    }
    const subject = await prisma.subject.delete({
        where: {
            id: body.id
        }
    });
    if (!subject){
        setResponseStatus(event, 503, 'An error occurred while deleting the subject');
        return;
    }
    setResponseStatus(event, 204, 'Subject deleted');
    return;
});
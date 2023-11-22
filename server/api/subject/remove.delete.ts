import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteSubjects])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    if (!await prisma.subject.findUnique({
        where: {
            id: body.id
        }
    })){
        setResponseStatus(event, 403);
        return {error: 'Invalid subject id'};
    }
    const subject = await prisma.subject.delete({
        where: {
            id: body.id
        }
    });
    if (!subject){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Subject deleted'};
});
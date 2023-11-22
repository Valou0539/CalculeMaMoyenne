import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteOwnSelfGrades])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const payload = verifyToken(<string>getHeader(event, 'Authorization'))
    if (!payload){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    });
    if (!user){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    if (!await prisma.gradeGroup.findUnique({
        where: {
            id: body.id,
            idUser: user.id
        }
    })){
        setResponseStatus(event, 403);
        return {error: 'Invalid grade group id'};
    }
    const gradeGroup = await prisma.gradeGroup.delete({
        where: {
            id: body.id
        }
    });
    if (!gradeGroup){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Grade group deleted'};
});
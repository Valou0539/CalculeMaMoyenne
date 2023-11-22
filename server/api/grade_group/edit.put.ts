import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelfGrades])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && !body.coefficient && !body.id_subject)) {
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
    const updateData: { name?: string, coefficient?: integer, idSubject?: integer } = {};

    if (body.name) {
        updateData.name = body.name;
    }

    if (body.coefficient) {
        updateData.coefficient = body.coefficient;
    }

    if (body.id_subject) {
        updateData.idSubject = body.id_subject;
    }
    const gradeGroup = await prisma.gradeGroup.update({
        where: {
            id: body.id
        },
        data: updateData
    });
    if (!gradeGroup){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Grade group updated'};
});
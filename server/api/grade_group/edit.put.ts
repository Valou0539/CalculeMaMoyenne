import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {integer} from "vscode-languageserver-types";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelfGrades])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id || (!body.name && body.coefficient === undefined && !body.id_subject)) {
        setResponseStatus(event, 422, 'Invalid body error {id, name?, coefficient?, id_subject?}');
        return;
    }
    const payload = verifyToken(<string>getHeader(event, 'Authorization'))
    if (!payload){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    });
    if (!user){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    if (!await prisma.gradeGroup.findUnique({
        where: {
            id: body.id,
            idUser: user.id
        }
    })){
        setResponseStatus(event, 404, 'Grade group not found');
        return;
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
        setResponseStatus(event, 503, 'An error occurred while updating grade group');
        return;
    }
    setResponseStatus(event, 204, 'Grade group updated');
    return;
});
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
    if (!body.id || (!body.value && !body.coefficient && !body.id_grade_group)) {
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
    if (!await prisma.grade.findUnique({
        where: {
            id: body.id,
            GradeGroup: {
                idUser: user.id
            }
        }
    })){
        setResponseStatus(event, 403);
        return {error: 'Invalid grade id'};
    }
    const updateData: { value?: number, coefficient?: integer, idGradeGroup?: integer } = {};

    if (body.value) {
        updateData.value = body.value;
    }

    if (body.coefficient) {
        updateData.coefficient = body.coefficient;
    }

    if (body.id_grade_group) {
        updateData.idGradeGroup = body.id_grade_group;
    }
    const grade = await prisma.grade.update({
        where: {
            id: body.id
        },
        data: updateData
    });
    if (!grade){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Grade updated'};
});
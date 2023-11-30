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
    const body = await readBody(event);
    if (!body.id || (!body.value && !body.coefficient && !body.idGradeGroup)) {
        setResponseStatus(event, 422, 'Invalid body error {id, value?, coefficient?, idGradeGroup?}');
        return;
    }
    if (!await prisma.grade.findUnique({
        where: {
            id: body.id,
            GradeGroup: {
                idUser: user.id
            }
        }
    })){
        setResponseStatus(event, 404, 'Grade not found');
        return;
    }

    const updateData: { value?: number, coefficient?: integer, idGradeGroup?: integer } = {};

    if (body.value) {
        updateData.value = body.value;
    }

    if (body.coefficient) {
        updateData.coefficient = body.coefficient;
    }

    if (body.idGradeGroup) {
        const gradeGroup = await prisma.gradeGroup.findUnique({
            where: {
                id: body.idGradeGroup,
                idUser: user.id
            }
        });
        if (!gradeGroup){
            setResponseStatus(event, 404, 'Grade group not found');
            return;
        }
        updateData.idGradeGroup = gradeGroup.id;
    }
    const grade = await prisma.grade.update({
        where: {
            id: body.id,
            GradeGroup: {
                idUser: user.id
            }
        },
        data: updateData
    });
    if (!grade){
        setResponseStatus(event, 503, 'An error occurred while updating the grade');
        return;
    }
    setResponseStatus(event, 204, 'Grade updated');
    return;
});
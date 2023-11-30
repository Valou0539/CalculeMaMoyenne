import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateOwnSelfGrades])){
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
    if (!body.value || !body.coefficient || !body.idGradeGroup) {
        setResponseStatus(event, 422, 'Invalid body error {value, coefficient, idGradeGroup}');
        return;
    }
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
    const grade = await prisma.grade.create({
        data: {
            value: body.value,
            coefficient: body.coefficient,
            idGradeGroup: gradeGroup.id
        }
    });
    if (!grade){
        setResponseStatus(event, 503, 'An error occurred while creating the grade');
        return;
    }
    setResponseStatus(event, 201, 'Grade created');
    return grade;
});
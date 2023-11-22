import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.CreateOwnSelfGrades])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.value || !body.coefficient || !body.id_grade_group) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const grade = await prisma.grade.create({
        data: {
            value: body.name,
            coefficient: body.coefficient,
            idGradeGroup: body.id_grade_group
        }
    });
    if (!grade){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Grade created'};
});
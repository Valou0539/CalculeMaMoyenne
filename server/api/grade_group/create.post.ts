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
    if (!body.name || !body.coefficient || !body.idSubject) {
        setResponseStatus(event, 422, 'Invalid body error (name, coefficient, idSubject)');
        return;
    }
    const gradeGroup = await prisma.gradeGroup.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idSubject: body.idSubject,
            idUser: user.id
        }
    });
    if (!gradeGroup){
        setResponseStatus(event, 503, 'An error occurred while creating the grade group');
        return;
    }
    setResponseStatus(event, 201, 'Grade group created');
    return gradeGroup;
});
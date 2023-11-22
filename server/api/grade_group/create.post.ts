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
    if (!body.name || !body.coefficient || !body.id_subject || !body.id_user) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const gradeGroup = await prisma.gradeGroup.create({
        data: {
            name: body.name,
            coefficient: body.coefficient,
            idSubject: body.id_subject,
            idUser: body.id_user
        }
    });
    if (!gradeGroup){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Grade group created'};
});
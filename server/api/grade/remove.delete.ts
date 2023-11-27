import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteOwnSelfGrades])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const payload = verifyToken(<string>getHeader(event, 'Authorization'))
    if (!payload){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.id) {
        setResponseStatus(event, 422, 'Invalid body error {id}');
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
    const grade = await prisma.grade.delete({
        where: {
            id: body.id
        }
    });
    if (!grade){
        setResponseStatus(event, 503, 'An error occurred while deleting the grade');
        return;
    }
    setResponseStatus(event, 204, 'Grade deleted');
    return;
});
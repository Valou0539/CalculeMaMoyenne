import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelf])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const body = await readBody(event);
    if (!body.pseudo) {
        setResponseStatus(event, 422, 'Invalid body error {pseudo}');
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
    if (await prisma.user.findUnique({
        where: {
            pseudo: body.pseudo
        }})) {
        setResponseStatus(event, 401, 'Unauthorized, pseudo already exists');
        return;
    }

    const renamed_user =  await prisma.user.update({
        where: {
            id: payload.user_id
        },
        data: {
            pseudo: body.pseudo
        }
    })
    if (!renamed_user){
        setResponseStatus(event, 503, 'An error occurred while updating the pseudo');
        return;
    }
    setResponseStatus(event, 204, 'Pseudo updated');
    return;
});
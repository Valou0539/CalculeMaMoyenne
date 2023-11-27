import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.DeleteOwnSelf])){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    const payload = verifyToken(<string>getHeader(event, 'Authorization'))
    if (!payload){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    let user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    });
    if (!user){
        setResponseStatus(event, 401, 'Unauthorized');
        return;
    }
    user = await prisma.user.delete({
        where: {
            id: user.id
        }
    });
    if (!user){
        setResponseStatus(event, 503, 'An error occurred while deleting the user');
        return;
    }
    console.log('User deleted');
    setResponseStatus(event, 204, 'User deleted');
    return;
});
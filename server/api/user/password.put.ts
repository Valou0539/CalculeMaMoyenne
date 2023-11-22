import {PrismaClient} from "@prisma/client";
import {checkTokenPermissions, verifyToken} from "~/server/services/jwtService";
import {PermissionsEnum} from "~/server/services/userService";
import {compare, hash} from "bcrypt-ts";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    if (!checkTokenPermissions(event, [PermissionsEnum.UpdateOwnSelf])){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const body = await readBody(event);
    if (!body.password || !body.new_password || body.new_password.length < 5) {
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
    if (!await compare(body.password, user.password)){
        setResponseStatus(event, 403);
        return {error: 'Invalid password'};
    }
    const hashed_password = await hash(body.new_password, 10);
    const password = await prisma.user.update({
        where: {
            id: payload.user_id
        },
        data: {
            password: hashed_password
        }
    })
    if (!password){
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {message: 'Password updated'};
});
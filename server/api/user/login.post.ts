import {PrismaClient} from "@prisma/client";
import {compare} from "bcrypt-ts";
import {findRoleByName} from "~/server/services/userService";
import {generateAuthToken} from "~/server/services/jwtService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body.pseudo || !body.password){
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    const user = await prisma.user.findUnique({
        where: {
            pseudo: body.pseudo,
        },
    });
    if (!user) {
        setResponseStatus(event, 403);
        return {error: 'User not found'};
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!await compare(body.password, user.password)){
        setResponseStatus(event, 403);
        return {error: 'Invalid password'};
    }
    const user_role = findRoleByName(user.role)
    if (!user_role){
        setResponseStatus(event, 403);
        return {error: 'Invalid user role error'}
    }
    setResponseStatus(event, 200);
    return {token: generateAuthToken({user_id: user.id, role: user.role, permissions: user_role.permissions})}
});
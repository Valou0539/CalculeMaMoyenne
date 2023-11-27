import {PrismaClient} from "@prisma/client";
import {compare} from "bcrypt-ts";
import {findRoleByName} from "~/server/services/userService";
import {generateAuthToken} from "~/server/services/jwtService";

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body.pseudo || !body.password){
        setResponseStatus(event, 422, 'Invalid body error {pseudo, password}');
        return;
    }
    const user = await prisma.user.findUnique({
        where: {
            pseudo: body.pseudo,
        },
    });
    if (!user) {
        setResponseStatus(event, 404, 'User not found');
        return;
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (!await compare(body.password, user.password)){
        setResponseStatus(event, 401, 'Unauthorized, invalid password');
        return;
    }
    const user_role = findRoleByName(user.role)
    if (!user_role){
        setResponseStatus(event, 401, 'Unauthorized, invalid user role');
        return;
    }
    setResponseStatus(event, 200, 'Authorized');
    return {token: generateAuthToken({user_id: user.id, role: user.role, permissions: user_role.permissions})}
});
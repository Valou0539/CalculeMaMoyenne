import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt-ts';
import {generateAuthToken} from "~/server/services/jwtService";
import {Roles} from "~/server/services/userService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    if (!body.pseudo || !body.password || body.password.length < 5) {
        setResponseStatus(event, 401);
        return {error: 'Invalid body error'};
    }
    if (await prisma.user.findUnique({
        where: {
            pseudo: body.pseudo
        }
    })) {
        setResponseStatus(event, 403);
        return {error: 'A user with this pseudo already exists'};
    }
    const hashed_password = await hash(body.password, 10);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const user = await prisma.user.create({
        data: {
            pseudo: body.pseudo,
            password: hashed_password
        },
    });
    if (!user) {
        setResponseStatus(event, 403);
        return {error: 'An error occurred'};
    }
    setResponseStatus(event, 200);
    return {token: generateAuthToken({user_id: user.id, role: user.role, permissions: Roles.user.permissions})};
});
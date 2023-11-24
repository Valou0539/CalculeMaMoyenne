import {PrismaClient} from "@prisma/client";
import {verifyToken} from "~/server/services/jwtService";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const payload = verifyToken(<string>getHeader(event, 'Authorization'))
    if (!payload){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    const user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        },
        select: {
            pseudo: false,
            role: true,
            password: false,
            createdAt: false,
            updatedAt: false,
            GradeGroup: false
        }
    });
    if (!user){
        setResponseStatus(event, 402);
        return {error: 'Unauthorized'};
    }
    setResponseStatus(event, 200);
    return {role:user.role};
})
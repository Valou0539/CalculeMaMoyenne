import {verifyToken} from "~/server/services/jwtService";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default defineNuxtRouteMiddleware((to, from) => {
    const headers = useRequestHeaders()
    if (!headers.Authorization){
        return navigateTo('/')
    }
    const payload = verifyToken(<string>headers.Authorization);
    if (!payload){
        return navigateTo('/')
    }
    if (!prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    })){
        return navigateTo('/')
    }
})
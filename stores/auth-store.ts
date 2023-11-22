import {verifyToken} from "~/server/services/jwtService";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function authenticatedAs(token: string | null ): Promise<string | null> {
    if (!token) return null;
    const payload = verifyToken(token);
    if (!payload) return null;
    const user = await prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    });
    if (!user){
        return null;
    }
    return user.role;
}

function isAuthenticated(token: string | null): boolean {
    if (!token) return false;
    const payload = verifyToken(token);
    if (!payload) return false;
    if (!prisma.user.findUnique({
        where: {
            id: payload.user_id
        }
    })) return false;
    return true;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: () : {token: string | null } => ({
        token: null
    }),
    getters: {
        isAuthenticated: (state) => isAuthenticated(state.token),
        authenticatedAs: async (state) => await authenticatedAs(state.token)
    },
    actions: {
        setToken(token: string){
            this.token = token
        }
    }
})
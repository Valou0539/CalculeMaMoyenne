import {PrismaClient} from "@prisma/client";
import {useAuthStore} from "~/stores/auth-store";

const prisma = new PrismaClient()

const unauthenticatedPath :string[] = [
    '/',
    '/index',
    '/login',
    '/register',
    '/docs'
];
const userPath :string[] = [
    '/mes-notes',
];
const adminPath :string[] = [
    '/admin'
];

export default defineNuxtRouteMiddleware( async (to, from) => {
    if (unauthenticatedPath.includes(to.path)) return;
    if (userPath.includes(to.path)){
        const authStore = useAuthStore();
        if (authStore.isAuthenticated) return;
        else return navigateTo('/');
    }
    if (adminPath.includes(to.path)){
        const authStore = useAuthStore();
        if (authStore.isAuthenticated && await authStore.authenticatedAs === 'admin') return;
        else return navigateTo('/');
    }
    const authStore = useAuthStore();
    authStore.$subscribe((cb) => { console.log(cb.events) })
    const role = authStore.isAuthenticated;
    console.log(role)
})
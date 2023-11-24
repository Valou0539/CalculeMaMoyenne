import {useAuthStore} from "~/stores/auth-store";

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
    const authStore = useAuthStore();
    if (unauthenticatedPath.includes(to.path)) return;
    if (userPath.includes(to.path)){
        if ((await authStore.isAuthenticated).authenticated) return;
        return navigateTo('/');
    }
    if (adminPath.includes(to.path)){
        if (authStore.isAuthenticated && (await authStore.isAuthenticated).role === 'admin') return;
        return navigateTo('/');
    }
    const role = (await authStore.isAuthenticated).role;
    console.log(role);
})
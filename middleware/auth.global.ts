import {useAuthStore} from "~/stores/auth-store";

const unauthenticatedPath :string[] = [
    '/',
    '/index',
    '/login',
    '/register',
    '/doc'
];
const userPath :string[] = [
    '/mes-notes',
    '/logout',
    '/doc',
    '/account'
];
const adminPath :string[] = [
    '/admin-panel',
    '/logout',
    '/doc',
    '/account'
];

export default defineNuxtRouteMiddleware( async (to, from) => {
    const authStore = useAuthStore();
    if (!authStore && to.path !== '/') return;
    switch ((await authStore.isAuthenticated).role) {
        case 'admin':
            if (adminPath.includes(to.path) || to.path.startsWith('/api/')) return;
            else return navigateTo('/admin-panel');
        case 'user':
            if (userPath.includes(to.path) || to.path.startsWith('/api/')) return;
            else return navigateTo('/mes-notes');
        default:
            if (unauthenticatedPath.includes(to.path) || to.path.startsWith('/api/')) return;
            else return navigateTo('/');
    }
})
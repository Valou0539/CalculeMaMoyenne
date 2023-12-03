interface AuthenticationResult {
    role: string;
    authenticated: boolean;
}

async function isAuthenticated(token: string | null): Promise<AuthenticationResult> {
    if (!token) {
        return { role: 'unauthenticated', authenticated: false };
    }
    const response : {role?: string | undefined, error?: string | undefined} = await $fetch('/api/user/authorization', {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
    return response.role ? { role: response.role, authenticated: true } : { role: 'unauthenticated', authenticated: false };
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: () : {token: string | null } => ({
        token: null
    }),
    getters: {
        isAuthenticated: (state) => isAuthenticated(state.token),
    },
    actions: {
        setToken(token: string | null){
            this.token = token
        }
    },
    persist: true
});
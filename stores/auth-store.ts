interface AuthenticationResult {
    role: string;
    authenticated: boolean;
}

async function isAuthenticated(token: string | null): Promise<AuthenticationResult> {
    if (!token) {
        return { role: 'unauthenticated', authenticated: false };
    }

    let response: {role?: string | undefined, error?: string | undefined};

    try {
        response = await $fetch('/api/user/authorization', {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        });
    } catch (error) {
        console.error('Error fetching authorization:', error);
        useAuthStore().setToken(null);
        return { role: 'unauthenticated', authenticated: false };
    }

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
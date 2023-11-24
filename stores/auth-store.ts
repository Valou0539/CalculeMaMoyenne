interface AuthenticationResult {
    role: string;
    authenticated: boolean;
}

async function isAuthenticated(token: string | null): Promise<AuthenticationResult> {
    if (!token) {
        return { role: 'unauthenticated', authenticated: false };
    }

    try {
        const response = await fetch('/api/user/authorization', {
            method: 'GET',
            headers: {
                'Authorization': token
            }
        });

        if (response.status !== 200) {
            return { role: 'unauthenticated', authenticated: false };
        }

        const data = await response.json();
        return { role: data.role, authenticated: true };
    } catch (error) {
        return { role: 'unauthenticated', authenticated: false };
    }
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
        setToken(token: string){
            this.token = token
        }
    }
});
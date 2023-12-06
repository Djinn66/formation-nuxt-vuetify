import {useAuthStore} from "~/auth/store/useAuthStore";
import {ConstantesPaths} from "~/constantes/constantes-paths";

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    const authentified = authStore.isAuthenticated();
    const includedLoginPath = pathsLogin.includes(<ConstantesPaths>to.path);

    if (!authentified && !includedLoginPath) {
        return navigateTo("/auth/login");
    }
});

const pathsLogin = [
    ConstantesPaths.login,
    ConstantesPaths.register,
    ConstantesPaths.forgotPassword,
];

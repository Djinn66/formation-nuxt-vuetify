import { defineStore } from "pinia";
import { useFetchService } from "~/composables/useFetchService";
import {MethodeHTTP} from "~/auth/constantes/MethodeHTTP";
import type {User} from "~/types/user";
import type {Login} from "~/types/login";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User>();

  function isAuthenticated() {
    return Boolean(user.value);
  }

  async function tryLogin(login: Login) {
    const utilisateur = await useFetch<User>(
      "/api/auth/token",
        {
          method: MethodeHTTP.GET,
          body: login,
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
    );
    console.log(utilisateur.data)
      if ("id" in utilisateur.data) {
          await useFetch<User>(
              `api/auth/token/${utilisateur.data.id}`,
              {method:MethodeHTTP.GET},
          );
      }

    return utilisateur;
  }

  return { user, isAuthenticated, tryLogin };
});

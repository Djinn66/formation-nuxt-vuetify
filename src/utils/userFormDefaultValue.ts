import type {User} from "~/types/user";

export const userFormDefaultValue = {
    nom: "",
    prenom: "",
    identifiant: "",
    motDePasse: "",
    profil: [],
} satisfies Omit<User, "id">
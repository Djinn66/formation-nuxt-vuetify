import type {Entity} from "~/types/entity";

export interface User extends Entity{
    nom: string;
    prenom: string;
    identifiant: string;
    motDePasse: string;
    profil: Array<string>;
}
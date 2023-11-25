import type {Entity} from "~/types/entity";

export interface User extends Entity{
    firstName: string;
    lastName: string;
    gender: string;
    email: string;
    phone: string;
    password: string;
    image?: string;
    admin: boolean;
}

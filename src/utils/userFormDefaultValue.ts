import type {User} from "~/types/user";

export const userFormDefaultValue = {
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    image: "",
    admin: false
} satisfies Omit<User, "id">
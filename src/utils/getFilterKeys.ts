import type {ReadonlyHeaders} from "~/types/headers";

const escapeKeys = ['actions', 'image', 'thumbnail', 'password']
export const getFilterKeys = (headers: ReadonlyHeaders) => {
    return headers?.map(header => header.key as string)
        .filter(key => !escapeKeys.includes(key as string))
}
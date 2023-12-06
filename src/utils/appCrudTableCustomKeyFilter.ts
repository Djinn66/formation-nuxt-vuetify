import type {ReadonlyHeaders} from "~/types/headers";

const FILTER = ['actions']

export const appCrudTableCustomKeyFilter = (headers: Array<string>) => {
    return headers?.filter((f: string) => !FILTER.includes(f))
}
import type {ReadonlyHeaders} from "~/types/headers";

export const appCrudTableHeaders = {
    users: [
        {title: 'Photo', align: 'start', sortable: false, key: 'image',},
        {title: 'Nom', align: 'start', sortable: true, key: 'lastName',},
        {title: 'Prénom', align: 'start', sortable: true, key: 'firstName',},
        {title: 'Email', align: 'start', sortable: true, key: 'email',},
        {title: 'Actions', key: 'actions', sortable: false},
    ] satisfies ReadonlyHeaders,
    products: [
        { title: 'Photo', align: 'start', sortable: false, key: 'thumbnail', },
        { title: 'Title', align: 'start', sortable: true, key: 'title',},
        { title: 'Prix', align: 'start', sortable: true, key: 'price',},
        { title: 'Catégorie', align: 'start', sortable: true, key: 'category',},
        { title: 'Actions', key: 'actions', sortable: false },
    ] satisfies ReadonlyHeaders,
}
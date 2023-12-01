import UserForm from "~/forms/UserForm.vue";
import ProductForm from "~/forms/ProductForm.vue";

export const formConfig = {
    components:{
        users: UserForm,
        products: ProductForm
    },
    defaultValues:{
        users: userFormDefaultValue,
        products: productFormDefaultValue
    },
    validationRules : {
        required: (v:string) => !!v || 'Ce champ est requis !',
        email: (v: string) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(v) || 'Adresse mail invalide !'
        }
    }
}
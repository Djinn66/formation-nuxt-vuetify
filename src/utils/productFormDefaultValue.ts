import type {Product} from "~/types/product";

export const productFormDefaultValue = {
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: ''
} satisfies Omit<Product, "id">
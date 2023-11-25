import type {Entity} from "~/types/entity";

export interface Product extends Entity{
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail?: string;
    images?: string[];
}

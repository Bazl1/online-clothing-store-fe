import { ICategory } from "./Category.types";

export interface IProduct {
    id: string;
    articul: string;
    title: string;
    description: string;
    price: number;
    discountPrice: number;
    category: ICategory;
    images: string[];
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface GetProductsResponse {
    success: boolean;
    data: IProduct[];
    page: number;
    totalPages: number;
    totalItems: number;
}

export interface GetProductByIdResponse {
    success: boolean;
    data: IProduct;
    page: number;
    totalPages: number;
    totalItems: number;
}

import { ICategory } from "./category.types";

export interface CreateOrderRequest {
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    country: string;
    state: string;
    city: string;
    street: string;
    house: string | null;
    flat: string | null;
    floor: string | null;
    zip: string | null;
    items: {
        productId: string;
        quantity: number;
    }[];
}

export interface IHistoryProduct {
    id: string;
    product: {
        id: string;
        articul: string;
        title: string;
        description: string;
        price: number;
        discountPrice: number;
        isActive: boolean;
        category: ICategory;
        images: string[];
        createdAt: Date;
        updatedAt: Date;
    };
    title: string;
    quantity: number;
    price: number;
    createdAt: Date;
}

export interface IHistory {
    id: string;
    price: number;
    items: IHistoryProduct[];
    country: string;
    email: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    state: string;
    city: string;
    street: string;
    house: string;
    flat: string;
    floor: string;
    zip: string;
    totalPrice: number;
    createdAt: Date;
}

export interface GetHistoryResponse {
    success: boolean;
    data: IHistory[];
    page: number;
    totalPages: number;
    totalItems: number;
}

export interface GetHistoryByIdResponse {
    success: boolean;
    data: IHistory;
}

import { IProduct } from "./product.types";

export interface GetCatalogProductsResponse {
    data: IProduct[];
    page: number;
    totalPages: number;
    totalItems: number;
}

export interface GetCatalogProductByIdResponse {
    data: IProduct;
}

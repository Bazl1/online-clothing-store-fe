import {
    GetCatalogProductByIdResponse,
    GetCatalogProductsResponse,
    instance
} from "@/shared";

export default class CatalogService {
    static getCatalogProducts = (
        page: number,
        limit: number,
        search: string,
        sort: string,
        maxPrice: number,
        minPrice: number,
        categoryIds: string[]
    ): Promise<GetCatalogProductsResponse> => {
        return instance.post(
            `products/catalog?page=${page}&limit=${limit}${search ? `search=${search}` : ""}${sort ? `sort=${sort}` : ""}${maxPrice ? `maxPrice=${maxPrice}` : ""}${minPrice ? `minPrice=${minPrice}` : ""}`,
            {
                categoryIds: categoryIds
            }
        );
    };

    static getCatalogProductById = (
        id: string
    ): Promise<GetCatalogProductByIdResponse> => {
        return instance.get(`products/catalog/${id}`);
    };
}

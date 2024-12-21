export interface ICategory {
    id: string;
    isActive: boolean;
    iconUrl: string;
    title: string;
    description: string;
}

export interface GetCategoriesResponse {
    success: boolean;
    data: ICategory[];
    page: number;
    totalPages: number;
    totalItems: number;
}

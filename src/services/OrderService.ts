import {
    CreateOrderRequest,
    GetHistoryByIdResponse,
    GetHistoryResponse,
    instance
} from "@/shared";

export default class OrderService {
    static createOrder = (data: CreateOrderRequest): Promise<void> => {
        return instance.post("orders/client", data);
    };

    static getHistory = (
        page: number,
        limit: number
    ): Promise<GetHistoryResponse> => {
        return instance.get(`order-history?page=${page}&limit=${limit}`);
    };

    static getHistoryById = (id: string): Promise<GetHistoryByIdResponse> => {
        return instance.get(`order-history/${id}`);
    };
}

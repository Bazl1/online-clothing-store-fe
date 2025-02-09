import { CreateOrderRequest, instance } from "@/shared";

export default class OrderService {
    static createOrder = (data: CreateOrderRequest): Promise<void> => {
        return instance.post("orders/client", data);
    };
}

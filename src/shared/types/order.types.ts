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

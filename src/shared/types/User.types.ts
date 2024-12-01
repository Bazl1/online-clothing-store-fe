export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    address: {
        country: string;
        state: string;
        city: string;
        street: string;
        house: string;
        flat: string;
        floor: number;
        zip: number;
    };
    createdAt: string;
    updatedAt: string;
}

export interface GetMeResponse {
    success: boolean;
    data: IUser;
}

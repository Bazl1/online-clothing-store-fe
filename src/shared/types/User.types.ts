export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phoneNumber: string;
    address: {
        country: string;
        state: string;
        city: string;
        street: string;
        house: string;
        flat: string;
        floor: string;
        zip: string;
    };
    createdAt: string;
    updatedAt: string;
}

export interface GetMeResponse {
    success: boolean;
    data: IUser;
}

export interface ChangeProfileRequest {
    firstName: string;
    lastName: string;
    phoneNumber?: string | undefined;
}

export interface ChangeProfileResponse {
    success: boolean;
    data: IUser;
}

export interface ChangePasswordRequest {
    password: string;
    newPassword: string;
}

export interface ChangeAddressRequest {
    state?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    street?: string | undefined;
    house?: string | undefined;
    flat?: string | undefined;
    floor?: string | undefined;
    zip?: string | undefined;
}

export interface ChangeAddressResponse {
    success: boolean;
    data: IUser;
}

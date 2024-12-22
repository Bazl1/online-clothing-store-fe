export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/`;
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL;
export const STORAGE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/uploads/`;

export enum USER_ROLES {
    ADMIN = "admin",
    USER = "user"
}

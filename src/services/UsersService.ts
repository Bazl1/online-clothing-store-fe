import {
    ChangeUserRequest,
    CreateUserRequest,
    GetUsersResponse,
    instance
} from "@/shared";

export default class UsersService {
    static getUsers = (
        page: number,
        limit: number,
        search: string
    ): Promise<GetUsersResponse> => {
        return instance.get(
            `users?page=${page}&limit=${limit}${search ? `&query=${search}` : ""}`
        );
    };

    static createUser = (data: CreateUserRequest): Promise<void> => {
        return instance.post("users", data);
    };

    static changeUser = (
        id: string,
        data: ChangeUserRequest
    ): Promise<void> => {
        return instance.patch(`users/${id}`, data);
    };

    static deleteUsers = (ids: string[]): Promise<void> => {
        return instance.post("users/delete", {
            ids: ids
        });
    };
}

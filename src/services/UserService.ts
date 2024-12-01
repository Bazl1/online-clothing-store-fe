import { GetMeResponse, instance } from "@/shared";

export default class UserService {
    static getMe = (): Promise<GetMeResponse> => {
        return instance.get("auth/me");
    };
}

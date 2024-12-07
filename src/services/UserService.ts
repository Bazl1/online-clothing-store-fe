import {
    ChangeAddressRequest,
    ChangeAddressResponse,
    ChangePasswordRequest,
    ChangeProfileRequest,
    ChangeProfileResponse,
    GetMeResponse,
    instance
} from "@/shared";

export default class UserService {
    static getMe = (): Promise<GetMeResponse> => {
        return instance.get("auth/me");
    };

    static changeProfile = (
        data: ChangeProfileRequest
    ): Promise<ChangeProfileResponse> => {
        return instance.patch("profile", data);
    };

    static changePassword = (data: ChangePasswordRequest): Promise<void> => {
        return instance.patch("profile/password", data);
    };

    static changeAddress = (
        data: ChangeAddressRequest
    ): Promise<ChangeAddressResponse> => {
        return instance.patch("profile/address", data);
    };
}

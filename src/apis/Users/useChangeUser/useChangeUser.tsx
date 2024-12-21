import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UsersService } from "@/services";
import { ChangeUserRequest } from "@/shared";

const useChangeUser = (
    options?: UseMutationOptions<
        void,
        Error,
        { id: string; data: ChangeUserRequest }
    >
): UseMutationResult<void, Error, { id: string; data: ChangeUserRequest }> => {
    return useMutation({
        mutationFn: ({ id, data }) => UsersService.changeUser(id, data),
        ...options
    });
};

export default useChangeUser;

import {
    useMutation,
    UseMutationOptions,
    UseMutationResult
} from "@tanstack/react-query";

import { UsersService } from "@/services";

const useDeleteUsers = (
    options?: UseMutationOptions<void, Error, string[]>
): UseMutationResult<void, Error, string[]> => {
    return useMutation({
        mutationFn: (ids) => UsersService.deleteUsers(ids),
        ...options
    });
};

export default useDeleteUsers;

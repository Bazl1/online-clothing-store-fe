import { useQuery } from "@tanstack/react-query";

import { UsersService } from "@/services";

const useGetUsers = (page: number, limit: number, search: string) => {
    return useQuery({
        queryKey: ["users", page, limit, search],
        queryFn: () => UsersService.getUsers(page, limit, search)
    });
};

export default useGetUsers;

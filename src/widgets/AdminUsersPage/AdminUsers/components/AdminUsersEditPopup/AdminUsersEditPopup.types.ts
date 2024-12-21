import { Dispatch, SetStateAction } from "react";

import { IUser } from "@/shared";

export interface AdminUsersEditPopupProps {
    user: IUser;
    changeOpen: Dispatch<SetStateAction<boolean>>;
}

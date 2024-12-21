import { Dispatch, SetStateAction } from "react";

import { ICategory } from "@/shared";

export interface AdminCategoriesEditPopupProsp {
    category: ICategory;
    changeOpen: Dispatch<SetStateAction<boolean>>;
}

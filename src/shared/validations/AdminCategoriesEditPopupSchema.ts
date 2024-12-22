import * as yup from "yup";

export const AdminCategoriesEditPopupSchema = yup.object({});

export type AdminCategoriesEditPopupInputs = yup.InferType<
    typeof AdminCategoriesEditPopupSchema
>;

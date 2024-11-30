import * as yup from "yup";

import { REQUIRED_FIELD, validator } from "@/shared";

export const ProfilePasswordFormShema = yup.object({
    currentPassword: validator.password.required(REQUIRED_FIELD),
    newPassword: validator.password.required(REQUIRED_FIELD),
    confirmPassword: validator.password.required(REQUIRED_FIELD)
});

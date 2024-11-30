export const ERROR_MESSAGES = "Something went wrong";
export const REQUIRED_FIELD = "This field is required";
export const INVALID_EMAIL = "Invalid email";
export const INVALID_PASSWORD = "Invalid password";
export const MIN_LENGTH = (min: number = 8) =>
    `Minimum length is ${min} characters`;
export const MAX_LENGTH = (max: number = 32) =>
    `Maximum length is ${max} characters`;

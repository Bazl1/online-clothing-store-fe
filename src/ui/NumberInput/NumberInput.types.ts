import { InputHTMLAttributes } from "react";

export interface NumberInputProsp
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    value: string;
    onChange: (value: any) => void;
    label?: string;
    className?: string;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    error?: any;
    isRequired?: boolean;
    isDisabled?: boolean;
}

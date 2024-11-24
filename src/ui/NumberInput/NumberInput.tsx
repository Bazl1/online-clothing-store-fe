import { forwardRef, Ref } from "react";
import cn from "classnames";

import { FormField } from "@/ui";

import { NumberInputProsp } from "./NumberInput.types";

import styles from "./NumberInput.module.scss";

const NumberInput = forwardRef(
    (
        {
            value,
            onChange,
            label,
            className,
            variant = "primary",
            size = "md",
            error,
            isRequired = false,
            isDisabled = false,
            ...props
        }: NumberInputProsp,
        ref: Ref<HTMLInputElement>
    ) => {
        const handleOnChange = (value: any) => {
            if (onChange) {
                const trimmedValue = value.trim();
                const numberValue = Number(trimmedValue);
                const isValidInput = /^[0-9]*$/.test(trimmedValue);

                if (isValidInput && !isNaN(numberValue)) {
                    onChange({
                        target: {
                            value: numberValue
                        }
                    });
                } else {
                    return;
                }
            }
        };

        const handleKeyDown = (e: any) => {
            if (
                e.key === "Backspace" ||
                e.key === "Delete" ||
                e.key === "Tab" ||
                e.key === "Escape" ||
                e.key === "Enter" ||
                e.key === "ArrowLeft" ||
                e.key === "ArrowRight" ||
                e.ctrlKey ||
                e.metaKey
            ) {
                return;
            }

            if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
            }
        };

        return (
            <FormField label={label} size={size} error={error}>
                <label
                    className={cn(
                        styles.input__row,
                        className,
                        styles[`input__row_${variant}`],
                        styles[`input__row_${size}`],
                        {
                            [styles.input__row_disabled]: isDisabled,
                            [styles.input__row_error]: error
                        }
                    )}
                >
                    <input
                        ref={ref}
                        className={cn(
                            styles.input,
                            styles[`input__${variant}`],
                            styles[`input__${size}`],
                            {
                                [styles.input__disabled]: isDisabled
                            }
                        )}
                        type="number"
                        value={value}
                        onChange={(e) => handleOnChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        required={isRequired}
                        disabled={isDisabled}
                        {...props}
                    />
                </label>
            </FormField>
        );
    }
);

export default NumberInput;

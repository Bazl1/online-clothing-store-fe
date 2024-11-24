import cn from "classnames";

import { ButtonProps } from "./Button.types";

import styles from "./Button.module.scss";

const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    isBlock = false,
    isDisabled = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={cn(
                styles.button,
                className,
                styles[`button__${variant}`],
                styles[`button__${size}`],
                {
                    [styles.button__block]: isBlock,
                    [styles.button__disabled]: isDisabled
                }
            )}
            disabled={isDisabled}
            {...props}
        >
            {leftIcon ? (
                <span className={styles.button__icon}>{leftIcon}</span>
            ) : null}
            {children}
            {rightIcon ? (
                <span className={styles.button__icon}>{rightIcon}</span>
            ) : null}
        </button>
    );
};

export default Button;

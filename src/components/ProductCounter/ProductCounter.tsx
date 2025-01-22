import { Minus, Plus } from "lucide-react";

import { Button } from "@/ui";

import { ProductCounterProps } from "./ProductCounter.types";

import styles from "./ProductCounter.module.scss";

const ProductCounter = ({ value, onChange }: ProductCounterProps) => {
    const handleIncrement = () => {
        onChange(value + 1);
    };

    const handleDecrement = () => {
        if (value > 1) {
            onChange(value - 1);
        }
    };

    return (
        <div className={styles.counter}>
            <Button className={styles.counter__btn} onClick={handleIncrement}>
                <Plus size={21} strokeWidth={1} absoluteStrokeWidth />
            </Button>
            <div className={styles.counter__value}>{value}</div>
            <Button className={styles.counter__btn} onClick={handleDecrement}>
                <Minus size={21} strokeWidth={1} absoluteStrokeWidth />
            </Button>
        </div>
    );
};

export default ProductCounter;

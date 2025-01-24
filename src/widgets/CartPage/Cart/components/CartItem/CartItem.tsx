"use client";

import { useState } from "react";
import Image from "next/image";
import { Trash } from "lucide-react";

import { ProductCounter } from "@/components";

import styles from "./CartItem.module.scss";

const CartItem = () => {
    const [count, setCount] = useState<number>(1);

    return (
        <div className={styles.cart}>
            <div className={styles.cart__row}>
                <div className={styles.cart__img}>
                    <Image src="/img/background-hero.jpg" alt="img" fill />
                </div>
                <div className={styles.cart__column}>
                    <h3 className={styles.cart__title}>Test title</h3>
                    <div className={styles.cart__row}>
                        <p className={styles.cart__text}>price:</p>
                        <p className={styles.cart__text}>
                            <span>${10 * count}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cart__column}>
                <button className={styles.cart__btn}>
                    <Trash strokeWidth={1} size={20} />
                </button>
                <ProductCounter size="sm" value={count} onChange={setCount} />
            </div>
        </div>
    );
};

export default CartItem;

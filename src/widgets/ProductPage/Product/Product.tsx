"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Heart, ShoppingBag } from "lucide-react";

import { ProductSlider } from "@/widgets";
import { ProductCounter } from "@/components";
import { Button } from "@/ui";

import { useCartStore } from "@/store";

import styles from "./Product.module.scss";

const Product = () => {
    const { id } = useParams<{ id: string }>();

    const { cart, addProduct } = useCartStore((state) => state);

    const [counterValue, setCounterValue] = useState<number>(
        cart?.find((item: any) => item?.id === id)?.count || 1
    );

    const handleAddToCart = () => {
        addProduct({ id: id, count: counterValue });
    };

    return (
        <section className={styles.product}>
            <div className="container">
                <div className={styles.product__inner}>
                    <div className={styles.product__row}>
                        <div className={styles.product__column}>
                            <ProductSlider
                                slides={[
                                    "/img/background-hero.jpg",
                                    "/img/background-hero.jpg",
                                    "/img/background-hero.jpg",
                                    "/img/background-hero.jpg"
                                ]}
                            />
                        </div>
                        <div className={styles.product__column}>
                            <h2 className={styles.product__title}>Test text</h2>
                            <p className={styles.product__price}>100$</p>
                            <div className={styles.product__btns}>
                                <ProductCounter
                                    value={counterValue}
                                    onChange={setCounterValue}
                                />
                                <Button
                                    className={styles.product__btn}
                                    rightIcon={
                                        <ShoppingBag
                                            size={20}
                                            strokeWidth={2}
                                        />
                                    }
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </Button>
                                <Button className={styles.product__like_btn}>
                                    <Heart size={20} strokeWidth={2} />
                                </Button>
                            </div>
                            <p className={styles.product__description}>
                                <span>Description:</span>
                                <br />
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Ratione delectus facilis velit
                                est voluptatibus ut ea itaque. Excepturi aliquid
                                minima commodi neque, expedita corrupti impedit
                                fugiat quo explicabo, consequuntur asperiores!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;

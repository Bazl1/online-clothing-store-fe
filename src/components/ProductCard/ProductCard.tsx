"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, HeartOff } from "lucide-react";

import { useFavoriteStore } from "@/store";

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
    const demoId = "1";

    const { favorites, toggleFavorite } = useFavoriteStore((state) => state);

    const handleToggleFavorite = (e: any) => {
        e.preventDefault();
        toggleFavorite(demoId);
        // clear favorite cache
    };

    return (
        <Link href="/" className={styles.product}>
            <div className={styles.product__img}>
                <Image src="/img/background-hero.jpg" alt="img" fill />
                <button
                    className={styles.product__like}
                    onClick={(e) => handleToggleFavorite(e)}
                >
                    {favorites.includes(demoId) ? (
                        <HeartOff size={18} strokeWidth={1.5} />
                    ) : (
                        <Heart size={18} strokeWidth={1.5} />
                    )}
                </button>
            </div>
            <h3 className={styles.product__title}>Test text</h3>
            <p className={styles.product__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                minus magni eveniet explicabo nihil impedit, porro aut
                molestias! Officia exercitationem dolore distinctio illum. Enim
                doloribus omnis vitae placeat aperiam inventore? Nihil dolorum,
                error corporis voluptatem consectetur amet id. Iure facilis cum
                esse voluptatibus doloremque nulla? Dolorem, repellendus
                laboriosam quis velit sunt, quisquam animi sint repudiandae,
                enim nesciunt incidunt eaque delectus?
            </p>
            <div className={styles.product__price}>100$</div>
        </Link>
    );
};

export default ProductCard;

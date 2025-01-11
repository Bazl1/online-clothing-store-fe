import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
    return (
        <Link href="/" className={styles.product}>
            <div className={styles.product__img}>
                <Image src="/img/background-hero.jpg" alt="img" fill />
                <button className={styles.product__like}>
                    <Heart size={18} strokeWidth={1.5} />
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

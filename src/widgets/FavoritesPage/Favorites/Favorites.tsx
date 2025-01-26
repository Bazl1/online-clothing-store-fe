import { ProductCard } from "@/components";

import styles from "./Favorites.module.scss";

const Favorites = () => {
    return (
        <section className={styles.favorites}>
            <div className="container">
                <div className={styles.favorites__inner}>
                    <h2 className={styles.favorites__title}>Favorites</h2>
                    <div className={styles.favorites__items}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favorites;

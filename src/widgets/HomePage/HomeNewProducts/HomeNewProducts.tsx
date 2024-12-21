import styles from "./HomeNewProducts.module.scss";

const HomeNewProducts = () => {
    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__inner}>
                    <h2 className={styles.home__title}>Our Latest Products</h2>
                </div>
            </div>
        </section>
    );
};

export default HomeNewProducts;

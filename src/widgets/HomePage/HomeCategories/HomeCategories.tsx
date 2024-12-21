import styles from "./HomeCategories.module.scss";

const HomeCategories = () => {
    return (
        <section className={styles.home}>
            <div className="container">
                <div className={styles.home__inner}>
                    <h2 className={styles.home__title}>
                        Explore Our Categories
                    </h2>
                    <div className={styles.home__items}></div>
                </div>
            </div>
        </section>
    );
};

export default HomeCategories;

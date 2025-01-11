import styles from "./CheckoutList.module.scss";

const CheckoutList = () => {
    return (
        <div className={styles.checkout}>
            <h3 className={styles.checkout__title}>Products</h3>
            <ul className={styles.checkout__list}>
                <li className={styles.checkout__list_item}>
                    <p className={styles.checkout__item_text}>Test text</p>
                    <p className={styles.checkout__item_text}>
                        <span>100$</span>
                    </p>
                </li>
                <li className={styles.checkout__list_item}>
                    <p className={styles.checkout__item_text}>Test text</p>
                    <p className={styles.checkout__item_text}>
                        <span>100$</span>
                    </p>
                </li>
            </ul>
            <div className={styles.checkout__row}>
                <p className={styles.checkout__total}>Total:</p>
                <p className={styles.checkout__total}>200$</p>
            </div>
        </div>
    );
};

export default CheckoutList;

import { CartItem } from "@/widgets";

import styles from "./Cart.module.scss";
import { Button } from "@/ui";

const Cart = () => {
    return (
        <section className={styles.cart}>
            <div className="container">
                <div className={styles.cart__inner}>
                    <h2 className={styles.cart__title}>Cart</h2>
                    <div className={styles.cart__items}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className={styles.cart__row}>
                        <p className={styles.cart__price}>
                            Total: <span>$400</span>
                        </p>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;

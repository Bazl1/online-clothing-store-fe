import { HistoryItem } from "@/widgets";

import styles from "./History.module.scss";

const History = () => {
    return (
        <section className={styles.history}>
            <div className="container">
                <div className={styles.history__inner}>
                    <h2 className={styles.history__title}>History</h2>
                    <div className={styles.history__items}>
                        <HistoryItem />
                        <HistoryItem />
                        <HistoryItem />
                        <HistoryItem />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;

import { ScanBarcode } from "lucide-react";

import { Button } from "@/ui";

import styles from "./HistoryItem.module.scss";

const HistoryItem = () => {
    return (
        <div className={styles.history}>
            <div className={styles.history__column}>
                <p className={styles.history__order}>dfgdfsgdsgfdsgfdsg</p>
                <p className={styles.history__date}>10.04.2025</p>
            </div>
            <Button className={styles.history__btn}>
                <ScanBarcode size={20} strokeWidth={1} />
            </Button>
        </div>
    );
};

export default HistoryItem;

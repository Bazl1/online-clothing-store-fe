"use client";

import { useRef, useState } from "react";
import { EllipsisVertical } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import cn from "classnames";

import { FadeInDown, useOnClickOutside } from "@/shared";
import { AdminCategoriesDotsProps } from "./AdminCategoriesDots.types";

import styles from "./AdminCategoriesDots.module.scss";

const AdminCategoriesDots = ({
    isActive,
    handleDelete,
    handleEditOpen,
    handleToggle
}: AdminCategoriesDotsProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const dotsRef = useRef<HTMLDivElement | null>(null);

    const handleTogglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
    };

    useOnClickOutside(dotsRef, handleClosePopup);

    return (
        <div ref={dotsRef} className={styles.dots}>
            <div className={styles.dots__icon} onClick={handleTogglePopup}>
                <EllipsisVertical
                    size={20}
                    strokeWidth={1.5}
                    absoluteStrokeWidth
                />
            </div>

            <AnimatePresence initial={false}>
                {isOpen ? (
                    <motion.div
                        initial={FadeInDown.initial}
                        animate={FadeInDown.animate}
                        exit={FadeInDown.exit}
                        className={styles.dots__options}
                    >
                        <button
                            className={styles.dots__btn}
                            onClick={handleEditOpen}
                        >
                            Edit
                        </button>
                        <button
                            className={styles.dots__btn}
                            onClick={handleToggle}
                        >
                            {isActive ? "Disable" : "Enable"}
                        </button>
                        <button
                            className={cn(
                                styles.dots__btn,
                                styles.dots__btn_red
                            )}
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </div>
    );
};

export default AdminCategoriesDots;

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { CatalogFilterCategories } from "@/widgets";
import { Button, Input } from "@/ui";

import styles from "./CatalogFilter.module.scss";

const CatalogFilter = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectItem = (isChecked: boolean, id: string) => {
        setSelectedItems((prev) =>
            isChecked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const onSubmit = (data: any) => {};

    return (
        <form className={styles.catalog} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.catalog__column}>
                <h3 className={styles.catalog__title}>Category</h3>
                <CatalogFilterCategories
                    selectedItems={selectedItems}
                    onSelect={handleSelectItem}
                />
            </div>
            <div className={styles.catalog__column}>
                <h3 className={styles.catalog__title}>Price</h3>
                <div className={styles.catalog__row}>
                    <Input
                        type="number"
                        label="Min"
                        min={0}
                        error={errors.min?.message}
                        {...register("min")}
                    />
                    <Input
                        type="number"
                        label="Max"
                        min={0}
                        error={errors.max?.message}
                        {...register("max")}
                    />
                </div>
            </div>
            <Button className={styles.catalog__btn} type="submit">
                Apply
            </Button>
        </form>
    );
};

export default CatalogFilter;

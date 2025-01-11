"use client";

import { useState } from "react";

import { CatalogFilter } from "@/widgets";
import { ProductCard, SearchInput } from "@/components";
import { Select } from "@/ui";

import { sortList } from "@/shared";

import styles from "./Catalog.module.scss";

const Catalog = () => {
    const [search, setSearch] = useState<string>("");
    const [selectedSort, setSelectedSort] = useState<string>("");

    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.catalog__inner}>
                    <div className={styles.catalog__row}>
                        <div className={styles.catalog__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <div className={styles.catalog__select}>
                            <Select
                                value={selectedSort}
                                onChange={setSelectedSort}
                                options={sortList}
                            />
                        </div>
                    </div>
                    <div className={styles.catalog__row}>
                        <div className={styles.catalog__column}>
                            <CatalogFilter />
                        </div>
                        <div className={styles.catalog__column}>
                            <div className={styles.catalog__products}>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;

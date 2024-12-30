"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ListPlus } from "lucide-react";

import { AdminProductsTable } from "@/widgets";
import { GroupActionsSelect, SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import {
    ADMIN_CREATE_PRODUCTS_ROUTE,
    PaginationLimitsList,
    ProductsGroupActionsList,
    ProductsList
} from "@/shared";

import styles from "./AdminProducts.module.scss";

const AdminProducts = () => {
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(PaginationLimitsList[0]);
    const [search, setSearch] = useState<string>("");
    const [groupAction, setGroupAction] = useState<string>(
        ProductsGroupActionsList[0]?.value
    );
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const router = useRouter();

    const handleSelectAll = (isChecked: boolean) => {
        if (isChecked) {
            setSelectedItems(ProductsList.map((item) => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (isChecked: boolean, id: string) => {
        setSelectedItems((prev) =>
            isChecked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const handleApplyGroupAction = () => {};

    const goCreate = () => {
        router.push(ADMIN_CREATE_PRODUCTS_ROUTE);
    };

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Products</h2>
                    <div className={styles.admin__row}>
                        <div className={styles.admin__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <div className={styles.admin__actions}>
                            <div className={styles.admin__actions_select}>
                                <GroupActionsSelect
                                    value={groupAction}
                                    onChange={setGroupAction}
                                    options={ProductsGroupActionsList}
                                    onSubmit={handleApplyGroupAction}
                                />
                            </div>
                            <Button
                                leftIcon={
                                    <ListPlus
                                        size={20}
                                        strokeWidth={1.5}
                                        absoluteStrokeWidth
                                    />
                                }
                                onClick={goCreate}
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                    <>
                        <div className={styles.admin__table}>
                            <AdminProductsTable
                                data={ProductsList || []}
                                selectedItems={selectedItems}
                                onSelect={handleSelectItem}
                                onSelectAll={handleSelectAll}
                            />
                        </div>
                        <div className={styles.admin__pagination}>
                            <Pagination
                                currentPage={activePage}
                                onChange={setActivePage}
                                perPage={perPage}
                                onChangePerPage={setPerPage}
                                limitsList={PaginationLimitsList}
                                totalItems={0}
                            />
                        </div>
                    </>
                </div>
            </div>
        </section>
    );
};

export default AdminProducts;

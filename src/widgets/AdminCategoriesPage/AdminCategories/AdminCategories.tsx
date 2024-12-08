"use client";

import { useState } from "react";
import { ListPlus } from "lucide-react";

import { AdminCategoriesCreatePopup, AdminCategoriesTable } from "@/widgets";
import { GroupActionsSelect, SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import {
    PaginationLimitsList,
    CategoriesGroupActionsList,
    CategoriesList
} from "@/shared";

import styles from "./AdminCategories.module.scss";

const AdminCategories = () => {
    const [isCreatePopupOpen, setIsCreatePopupOpen] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(15);
    const [search, setSearch] = useState<string>("");
    const [groupAction, setGroupAction] = useState<string>("delete");
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectAll = (isChecked: boolean) => {
        if (isChecked) {
            setSelectedItems(CategoriesList.map((item) => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (isChecked: boolean, id: string) => {
        setSelectedItems((prev) =>
            isChecked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const handleApplyGroupAction = () => {
        // TODO: RHF for group action
    };

    const handleCreatePopupOpen = () => {
        setIsCreatePopupOpen(true);
    };

    const handleCreatePopupClose = () => {
        setIsCreatePopupOpen(false);
    };

    return (
        <>
            <section className={styles.admin}>
                <div className="container">
                    <div className={styles.admin__inner}>
                        <h2 className={styles.admin__title}>Categories</h2>
                        <div className={styles.admin__row}>
                            <div className={styles.admin__search}>
                                <SearchInput onChange={setSearch} />
                            </div>
                            <div className={styles.admin__actions}>
                                <div className={styles.admin__actions_select}>
                                    <GroupActionsSelect
                                        value={groupAction}
                                        onChange={setGroupAction}
                                        options={CategoriesGroupActionsList}
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
                                    onClick={handleCreatePopupOpen}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                        <div className={styles.admin__table}>
                            <AdminCategoriesTable
                                data={CategoriesList}
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
                                totalItems={1000}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {isCreatePopupOpen ? (
                <AdminCategoriesCreatePopup onClose={handleCreatePopupClose} />
            ) : null}
        </>
    );
};

export default AdminCategories;

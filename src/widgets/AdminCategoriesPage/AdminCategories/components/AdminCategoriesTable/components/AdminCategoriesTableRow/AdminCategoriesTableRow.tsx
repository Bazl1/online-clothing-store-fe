"use client";

import { useState } from "react";
import { flexRender } from "@tanstack/react-table";

import { AdminCategoriesDots, AdminCategoriesEditPopup } from "@/widgets";
import { Checkbox } from "@/ui";

import { AdminCategoriesTableRowProps } from "./AdminCategoriesTableRow.types";

import styles from "./AdminCategoriesTableRow.module.scss";

const AdminCategoriesTableRow = ({
    row,
    selectedItems,
    handleSelectItem,
    onDelete
}: AdminCategoriesTableRowProps) => {
    const [isEditPopupOpen, setIsEditPopupOpen] = useState<boolean>(false);

    const handleEditPopupOpen = () => {
        setIsEditPopupOpen(true);
    };

    const handleDeleteCategory = () => {
        onDelete([row.original.id]);
    };

    return (
        <>
            <div className={styles.table__body_item}>
                <div className={styles.table__body_checkbox}>
                    <Checkbox
                        checked={selectedItems.includes(row.original.id)}
                        onChange={(e) =>
                            handleSelectItem(e.target.checked, row.original.id)
                        }
                    />
                </div>

                <div key={row.id} className={styles.table__body_row}>
                    {row.getVisibleCells().map((cell) => (
                        <div key={cell.id} className={styles.table__body_value}>
                            <p className={styles.table__body_value_text}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                <div className={styles.table__body_dots}>
                    <AdminCategoriesDots
                        isActive={row.original.isActive}
                        handleEditOpen={handleEditPopupOpen}
                        handleDelete={handleDeleteCategory}
                    />
                </div>
            </div>
            {isEditPopupOpen ? (
                <AdminCategoriesEditPopup
                    category={row.original}
                    changeOpen={setIsEditPopupOpen}
                />
            ) : null}
        </>
    );
};

export default AdminCategoriesTableRow;

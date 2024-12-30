"use client";

import { flexRender } from "@tanstack/react-table";

import { AdminProductsTableDots } from "@/widgets";
import { Checkbox } from "@/ui";

import { AdminProductsTableRowProps } from "./AdminProductsTableRow.types";

import styles from "./AdminProductsTableRow.module.scss";

const AdminProductsTableRow = ({
    row,
    selectedItems,
    handleSelectItem
}: AdminProductsTableRowProps) => {
    return (
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
                {row.getVisibleCells().map((cell: any) => (
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
                <AdminProductsTableDots />
            </div>
        </div>
    );
};

export default AdminProductsTableRow;

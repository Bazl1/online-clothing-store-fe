"use client";

import { useRouter } from "next/navigation";
import { flexRender } from "@tanstack/react-table";

import { AdminOrdersTableRowDots } from "@/widgets";

import { AdminOrdersTableRowProps } from "./AdminOrdersTableRow.types";

import styles from "./AdminOrdersTableRow.module.scss";

const AdminOrdersTableRow = ({ row }: AdminOrdersTableRowProps) => {
    const router = useRouter();

    const handleEdit = () => {
        router.push("");
    };

    return (
        <div className={styles.table__body_item}>
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
                <AdminOrdersTableRowDots handleEdit={handleEdit} />
            </div>
        </div>
    );
};

export default AdminOrdersTableRow;

"use client";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import { AdminOrdersTableRow } from "@/widgets";

import { useMounted } from "@/shared";
import { AdminOrdersTableProps } from "./AdminOrdersTable.types";

import styles from "./AdminOrdersTable.module.scss";

const columnHelper = createColumnHelper<any>();

const columns = [
    columnHelper.accessor("order", {
        header: () => <span>№</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("fullname", {
        header: () => <span>Name</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("email", {
        header: () => <span>Email</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("status", {
        header: () => <span>Active</span>,
        cell: (info) => (info.getValue() ? "Active" : "Inactive")
    })
];

const AdminOrdersTable = ({ data }: AdminOrdersTableProps) => {
    const { mounted } = useMounted();

    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    if (!mounted) return null;

    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
                {table.getHeaderGroups().map((headerGroup) => (
                    <div
                        key={headerGroup.id}
                        className={styles.table__head_row}
                    >
                        {headerGroup.headers.map((header) => (
                            <p
                                key={header.id}
                                className={styles.table__head_item}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                )}
                            </p>
                        ))}
                    </div>
                ))}

                <div className={styles.table__head_dots} />
            </div>
            <div className={styles.table__body}>
                {table.getRowModel().rows.map((row) => (
                    <AdminOrdersTableRow key={row.original.id} row={row} />
                ))}
            </div>
        </div>
    );
};

export default AdminOrdersTable;

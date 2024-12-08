"use client";

import { useState } from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable
} from "@tanstack/react-table";

import { AdminUsersDots } from "@/widgets";
import { Checkbox } from "@/ui";

import { IUser, useMounted } from "@/shared";
import { AdminUsersProps } from "./AdminUsers.types";

import styles from "./AdminUsersTable.module.scss";

const columnHelper = createColumnHelper<IUser>();

const columns = [
    columnHelper.accessor("firstName", {
        header: () => <span>First Name</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("lastName", {
        header: () => <span>Last Name</span>,
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor("email", {
        header: () => <span>Email</span>,
        cell: (info) => info.getValue()
    })
];

const AdminUsersTable = ({
    data,
    selectedItems,
    onSelect,
    onSelectAll
}: AdminUsersProps) => {
    const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

    const { mounted } = useMounted();

    const table = useReactTable({
        data: data,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    if (!mounted) return null;

    const handleSelectAll = (isChecked: boolean) => {
        setIsAllSelected(isChecked);
        onSelectAll(isChecked);
    };

    const handleSelectItem = (isChecked: boolean, id: string) => {
        onSelect(isChecked, id);
        setIsAllSelected(data.length === selectedItems.length + 1 && isChecked);
    };

    return (
        <div className={styles.table}>
            <div className={styles.table__head}>
                <div className={styles.table__head_checkbox}>
                    <Checkbox
                        checked={isAllSelected}
                        onChange={(e) => handleSelectAll(e.target.checked)}
                    />
                </div>

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
                    <div key={row.id} className={styles.table__body_item}>
                        <div className={styles.table__body_checkbox}>
                            <Checkbox
                                checked={selectedItems.includes(
                                    row.original.id
                                )}
                                onChange={(e) =>
                                    handleSelectItem(
                                        e.target.checked,
                                        row.original.id
                                    )
                                }
                            />
                        </div>

                        <div key={row.id} className={styles.table__body_row}>
                            {row.getVisibleCells().map((cell) => (
                                <div
                                    key={cell.id}
                                    className={styles.table__body_value}
                                >
                                    <p
                                        className={
                                            styles.table__body_value_text
                                        }
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.table__body_dots}>
                            <AdminUsersDots />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminUsersTable;

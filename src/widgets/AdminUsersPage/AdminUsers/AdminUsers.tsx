"use client";

import { useState } from "react";
import { UserRoundPlus } from "lucide-react";

import { AdminUsersTable } from "@/widgets";
import { GroupActionsSelect, SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import {
    PaginationLimitsList,
    UsersGroupActionsList,
    UsersList
} from "@/shared";

import styles from "./AdminUsers.module.scss";

const AdminUsers = () => {
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(15);
    const [search, setSearch] = useState<string>("");
    const [groupAction, setGroupAction] = useState<string>("");
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleSelectAll = (isChecked: boolean) => {
        if (isChecked) {
            setSelectedItems(UsersList.map((item) => item.id));
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

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Users</h2>
                    <div className={styles.admin__row}>
                        <div className={styles.admin__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <div className={styles.admin__actions}>
                            <div className={styles.admin__actions_select}>
                                <GroupActionsSelect
                                    value={groupAction}
                                    onChange={setGroupAction}
                                    options={UsersGroupActionsList}
                                    onSubmit={handleApplyGroupAction}
                                />
                            </div>
                            <Button
                                leftIcon={
                                    <UserRoundPlus
                                        size={20}
                                        strokeWidth={1.5}
                                    />
                                }
                            >
                                Create
                            </Button>
                        </div>
                    </div>
                    <div className={styles.admin__table}>
                        <AdminUsersTable
                            data={UsersList}
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
    );
};

export default AdminUsers;

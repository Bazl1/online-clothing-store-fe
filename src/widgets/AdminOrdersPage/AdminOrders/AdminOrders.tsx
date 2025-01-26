"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { ListPlus } from "lucide-react";

import { AdminOrdersTable } from "@/widgets";
import { SearchInput } from "@/components";
import { Button, Pagination } from "@/ui";

import { paginationLimitsList } from "@/shared";

import styles from "./AdminOrders.module.scss";

const AdminOrders = () => {
    const [activePage, setActivePage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(paginationLimitsList[0]);
    const [search, setSearch] = useState<string>("");

    const router = useRouter();

    const queryClient = useQueryClient();

    const goCreate = () => {
        router.push("");
    };

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Orders</h2>
                    <div className={styles.admin__row}>
                        <div className={styles.admin__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <div className={styles.admin__actions}>
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
                    {!true ? (
                        <>
                            <div className={styles.admin__table}>
                                <AdminOrdersTable data={[]} />
                            </div>
                            <div className={styles.admin__pagination}>
                                <Pagination
                                    currentPage={activePage}
                                    onChange={setActivePage}
                                    perPage={perPage}
                                    onChangePerPage={setPerPage}
                                    limitsList={paginationLimitsList}
                                    totalItems={0}
                                />
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default AdminOrders;

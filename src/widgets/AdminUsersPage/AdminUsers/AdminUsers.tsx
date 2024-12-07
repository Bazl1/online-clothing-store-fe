"use client";

import { useState } from "react";
import { UserRoundPlus } from "lucide-react";

import { SearchInput } from "@/components";
import { Button } from "@/ui";

import styles from "./AdminUsers.module.scss";

const AdminUsers = () => {
    const [search, setSearch] = useState<string>("");

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Users</h2>
                    <div className={styles.admin__row}>
                        <div className={styles.admin__search}>
                            <SearchInput onChange={setSearch} />
                        </div>
                        <Button
                            leftIcon={
                                <UserRoundPlus size={20} strokeWidth={1.5} />
                            }
                        >
                            Create
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminUsers;

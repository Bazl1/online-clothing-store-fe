import { ReactNode } from "react";
import cn from "classnames";

import { Sidebar } from "@/components";

import { profileMenuList } from "@/shared";

import styles from "./ProfileSidebarLayout.module.scss";

const ProfileSidebarLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.layout}>
            <div className={styles.layout__column}>
                <Sidebar list={profileMenuList} />
            </div>
            <div className={styles.layout__column}>
                <div className={cn(styles.layout__content, "sidebar-content")}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebarLayout;

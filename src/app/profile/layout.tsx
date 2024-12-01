import { ReactNode } from "react";

import { ProfileSidebarLayout, ProtectedLayout } from "@/layouts";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <ProtectedLayout role={["user", "admin"]}>
            <ProfileSidebarLayout>{children}</ProfileSidebarLayout>
        </ProtectedLayout>
    );
};

export default layout;

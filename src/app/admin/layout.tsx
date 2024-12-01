import { ReactNode } from "react";

import { ProtectedLayout, SidebarLayout } from "@/layouts";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <ProtectedLayout role={["admin"]}>
            <SidebarLayout>{children}</SidebarLayout>
        </ProtectedLayout>
    );
};

export default layout;

import { ReactNode } from "react";

import { AuthLayout, ProtectedLayout, SidebarLayout } from "@/layouts";

import { USER_ROLES } from "@/shared";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthLayout>
            <ProtectedLayout role={[USER_ROLES?.ADMIN]}>
                <SidebarLayout>{children}</SidebarLayout>
            </ProtectedLayout>
        </AuthLayout>
    );
};

export default layout;

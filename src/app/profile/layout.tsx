import { ReactNode } from "react";

import { AuthLayout, ProfileSidebarLayout, ProtectedLayout } from "@/layouts";

import { USER_ROLES } from "@/shared";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <AuthLayout>
            <ProtectedLayout role={[USER_ROLES?.ADMIN, USER_ROLES?.USER]}>
                <ProfileSidebarLayout>{children}</ProfileSidebarLayout>
            </ProtectedLayout>
        </AuthLayout>
    );
};

export default layout;

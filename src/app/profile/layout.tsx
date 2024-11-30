import { ReactNode } from "react";

import { ProfileSidebarLayout } from "@/layouts";

const layout = ({ children }: { children: ReactNode }) => {
    return <ProfileSidebarLayout>{children}</ProfileSidebarLayout>;
};

export default layout;

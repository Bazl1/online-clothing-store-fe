import { ReactNode } from "react";

import { SidebarLayout } from "@/layouts";

const layout = ({ children }: { children: ReactNode }) => {
    return <SidebarLayout>{children}</SidebarLayout>;
};

export default layout;

import { ReactNode } from "react";

import { Header } from "@/widgets";

const MainLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">{children}</main>
        </div>
    );
};

export default MainLayout;

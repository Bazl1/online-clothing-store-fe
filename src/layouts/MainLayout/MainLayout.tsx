import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { Header } from "@/widgets";

import { useQueryClientProvider } from "@/shared";

const MainLayout = ({ children }: { children: ReactNode }) => {
    const queryClient = useQueryClientProvider();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="wrapper">
                <Header />
                <main className="main">{children}</main>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    closeOnClick
                    theme="light"
                />
            </div>
        </QueryClientProvider>
    );
};

export default MainLayout;

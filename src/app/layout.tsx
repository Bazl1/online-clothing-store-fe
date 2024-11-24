import { ReactNode } from "react";
import type { Metadata } from "next";

import { MainLayout } from "@/layouts";

import "@/shared/styles/styles.scss";

export const metadata: Metadata = {
    title: "Shop",
    description: "Shop description"
};

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}

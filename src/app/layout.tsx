import { ReactNode } from "react";
import type { Metadata } from "next";

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
                <main className="main">{children}</main>
            </body>
        </html>
    );
}

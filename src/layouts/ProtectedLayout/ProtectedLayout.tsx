"use client";

import { ReactNode, useState } from "react";

import { Loader } from "@/components";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    return !isLoading ? <>{children}</> : <Loader />;
};

export default ProtectedLayout;

"use client";

import { ReactNode, useEffect } from "react";

import { Loader } from "@/components";

import { useGetMe } from "@/apis";
import { useAuthStore } from "@/store";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    const setUser = useAuthStore((state) => state.setUser);

    const { data: meData, isLoading: meIsLoading } = useGetMe();

    useEffect(() => {
        if (meData) {
            setUser(meData?.data);
        }
    }, [meData]);

    return !meIsLoading ? <>{children}</> : <Loader />;
};

export default AuthLayout;

"use client";

import { useForm } from "react-hook-form";

import { Button, Input, PasswordInput } from "@/ui";

import styles from "./SignInForm.module.scss";

const SignInForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {};

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />
            <PasswordInput
                label="Password"
                error={errors.password?.message}
                {...register("password")}
            />
            <Button className={styles.form__btn} type="submit">
                Sign In
            </Button>
        </form>
    );
};

export default SignInForm;

"use client";

import { useForm } from "react-hook-form";

import { Button, Input, PasswordInput } from "@/ui";

import styles from "./SignUpForm.module.scss";

const SignUpForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {};

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form__row}>
                <Input
                    label="First Name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <Input
                    label="Last Name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
            </div>
            <Input
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />
            <div className={styles.form__row}>
                <PasswordInput
                    label="Password"
                    error={errors.password?.message}
                    {...register("password")}
                />
                <PasswordInput
                    label="Confirm Password"
                    error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
                />
            </div>
            <Button className={styles.form__btn} type="submit">
                Sign Up
            </Button>
        </form>
    );
};

export default SignUpForm;

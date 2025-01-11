"use client";

import { useForm } from "react-hook-form";

import { Button, Input } from "@/ui";

import { useAuthStore } from "@/store";

import styles from "./CheckoutForm.module.scss";

const CheckoutForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    const user = useAuthStore((state) => state.user);

    const onSubmit = (data: any) => {};

    return (
        <form className={styles.checkout} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.checkout__row}>
                <Input
                    label="First name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <Input
                    label="Last name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
                <Input
                    label="Email"
                    error={errors.email?.message}
                    {...register("email")}
                />
                <Input
                    label="Phone number"
                    error={errors.phone?.message}
                    {...register("phone")}
                />
            </div>
            <div className={styles.checkout__row}>
                <Input
                    label="Country"
                    error={errors.country?.message}
                    {...register("country")}
                />
                <Input
                    label="State"
                    error={errors.state?.message}
                    {...register("state")}
                />
                <Input
                    label="City"
                    error={errors.city?.message}
                    {...register("city")}
                />
            </div>
            <div className={styles.checkout__row}>
                <Input
                    label="Street"
                    error={errors.street?.message}
                    {...register("street")}
                />
                <div className={styles.checkout__row}>
                    <Input
                        label="House"
                        error={errors.house?.message}
                        {...register("house")}
                    />
                    <Input
                        label="Flat"
                        error={errors.flat?.message}
                        {...register("flat")}
                    />
                    <Input
                        type="number"
                        label="Floor"
                        error={errors.floor?.message}
                        {...register("floor")}
                    />
                    <Input
                        type="number"
                        label="Zip"
                        error={errors.zip?.message}
                        {...register("zip")}
                    />
                </div>
            </div>
            <div className={styles.checkout__row}>
                <Button>Confirm Order</Button>
            </div>
        </form>
    );
};

export default CheckoutForm;

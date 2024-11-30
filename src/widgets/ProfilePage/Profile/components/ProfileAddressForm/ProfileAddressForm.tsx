"use client";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input, NumberInput } from "@/ui";

import { ProfileAddressFormShema } from "@/shared";
import { ProfileAddressFormInputs } from "./ProfileAddressForm.types";

import styles from "./ProfileAddressForm.module.scss";

const ProfileAddressForm = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm<ProfileAddressFormInputs>({
        resolver: yupResolver(ProfileAddressFormShema)
    });

    const onSubmit = (data: ProfileAddressFormInputs) => {};

    return (
        <div className={styles.profile}>
            <h3 className={styles.profile__title}>My address</h3>
            <form
                className={styles.profile__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.profile__row}>
                    <Input
                        placeholder="Country"
                        error={errors.country?.message}
                        {...register("country")}
                    />
                    <Input
                        placeholder="State"
                        error={errors.state?.message}
                        {...register("state")}
                    />
                    <Input
                        placeholder="City"
                        error={errors.city?.message}
                        {...register("city")}
                    />
                </div>
                <div className={styles.profile__row}>
                    <Input
                        placeholder="Street"
                        error={errors.street?.message}
                        {...register("street")}
                    />
                    <div className={styles.profile__row}>
                        <Input
                            placeholder="House"
                            error={errors.house?.message}
                            {...register("house")}
                        />
                        <Input
                            placeholder="Flat"
                            error={errors.flat?.message}
                            {...register("flat")}
                        />
                        <Controller
                            name="floor"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error }
                            }) => (
                                <NumberInput
                                    value={value ?? ""}
                                    onChange={onChange}
                                    placeholder="Floor"
                                    error={error?.message}
                                />
                            )}
                        />
                        <Controller
                            name="zip"
                            control={control}
                            render={({
                                field: { onChange, value },
                                fieldState: { error }
                            }) => (
                                <NumberInput
                                    value={value ?? ""}
                                    onChange={onChange}
                                    placeholder="Zip"
                                    error={error?.message}
                                />
                            )}
                        />
                    </div>
                </div>
                <Button className={styles.profile__btn} type="submit" isBlock>
                    Save
                </Button>
            </form>
        </div>
    );
};

export default ProfileAddressForm;

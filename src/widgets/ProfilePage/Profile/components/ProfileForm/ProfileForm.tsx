"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button, Input } from "@/ui";

import { ProfileFormSchema } from "@/shared";
import { ProfileFormInputs } from "./ProfileForm.types";

import styles from "./ProfileForm.module.scss";

const ProfileForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<ProfileFormInputs>({
        resolver: yupResolver(ProfileFormSchema)
    });

    const onSubmit = (data: ProfileFormInputs) => {};

    return (
        <div className={styles.profile}>
            <h3 className={styles.profile__title}>My account</h3>
            <form
                className={styles.profile__form}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    placeholder="First name"
                    error={errors.firstName?.message}
                    {...register("firstName")}
                />
                <Input
                    placeholder="Last name"
                    error={errors.lastName?.message}
                    {...register("lastName")}
                />
                <Input
                    placeholder="Phone number"
                    error={errors.phoneNumber?.message}
                    {...register("phoneNumber")}
                />
                <Button className={styles.profile__btn} type="submit" isBlock>
                    Save
                </Button>
            </form>
        </div>
    );
};

export default ProfileForm;

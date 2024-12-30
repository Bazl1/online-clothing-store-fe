"use client";

import { Controller, useForm } from "react-hook-form";

import { AdminCreateProductFiles } from "@/widgets";
import { Button, Input, Select, Textarea } from "@/ui";

import styles from "./AdminCreateProduct.module.scss";

const AdminCreateProduct = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm();

    const onSubmit = (data: any) => {};

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Create product</h2>
                    <form
                        className={styles.admin__form}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className={styles.admin__row}>
                            <Controller
                                name="files"
                                control={control}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <AdminCreateProductFiles
                                        label="Images"
                                        value={value ?? []}
                                        onChange={onChange}
                                        error={error?.message}
                                    />
                                )}
                            />
                        </div>
                        <div className={styles.admin__row}>
                            <Input
                                label="Name"
                                error={errors.name?.message}
                                {...register("name")}
                            />
                            <Input
                                label="Articul"
                                error={errors.articul?.message}
                                {...register("articul")}
                            />
                            <Controller
                                name="category"
                                control={control}
                                render={({
                                    field: { onChange, value },
                                    fieldState: { error }
                                }) => (
                                    <Select
                                        label="Category"
                                        value={value}
                                        onChange={onChange}
                                        options={[]}
                                        error={error?.message}
                                    />
                                )}
                            />
                        </div>
                        <div className={styles.admin__row}>
                            <Input
                                type="number"
                                label="Price"
                                error={errors.price?.message}
                                {...register("price")}
                            />
                            <Input
                                type="number"
                                label="Discount price"
                                error={errors.discountPrice?.message}
                                {...register("discountPrice")}
                            />
                        </div>
                        <div className={styles.admin__row}>
                            <Textarea
                                label="Description"
                                error={errors.description?.message}
                                {...register("description")}
                            />
                        </div>
                        <div className={styles.admin__row}>
                            <Button type="submit">Create</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminCreateProduct;

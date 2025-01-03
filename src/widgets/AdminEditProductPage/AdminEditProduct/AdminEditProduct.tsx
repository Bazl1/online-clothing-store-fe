"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { AdminEditProductFiles } from "@/widgets";
import { Button, Input, Select, Textarea } from "@/ui";

import styles from "./AdminEditProduct.module.scss";

const AdminEditProduct = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm();

    const [removedFiles, setRemovedFiles] = useState<string[]>([]);

    const onSubmit = (data: any) => {};

    return (
        <section className={styles.admin}>
            <div className="container">
                <div className={styles.admin__inner}>
                    <h2 className={styles.admin__title}>Edit product</h2>
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
                                    <AdminEditProductFiles
                                        label="Images"
                                        value={value ?? []}
                                        onChange={onChange}
                                        onChangeRemoved={setRemovedFiles}
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
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AdminEditProduct;

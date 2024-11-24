"use client";

import { Controller, useForm } from "react-hook-form";

import styles from "./SignInForm.module.scss";

const SignInForm = () => {
    const {
        handleSubmit,
        register,
        control,
        formState: { errors }
    } = useForm();

    return <form className=""></form>;
};

export default SignInForm;

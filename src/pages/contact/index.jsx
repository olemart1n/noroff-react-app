import React from "react";
import { StyledContact } from "./Styled.Contact";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number, date, InferType } from "yup";

let userSchema = object({
    fullName: string().required(),
    email: string().email().required(),
    country: string().required(),
    address: string().required(),
});

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <StyledContact>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fullName">First name</label>
                <input {...register("fullName")} />
                <p>{errors.firstName?.message}</p>
                <label htmlFor="email">email</label>
                <input {...register("email")} />
                <p>{errors.email?.message}</p>
                <label htmlFor="country">country</label>
                <input {...register("country")} />
                <p>{errors.country?.message}</p>
                <label htmlFor="address">address</label>
                <input {...register("address")} />
                <p>{errors.address?.message}</p>
                <button>Submit</button>
            </form>
        </StyledContact>
    );
}

export default Contact;

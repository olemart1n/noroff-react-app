import React from "react";
import { StyledContact } from "./Styled.Contact";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

let userSchema = object({
    fullName: string().required(),
    email: string().email().required(),
    subject: string().required(),
    body: string().required(),
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
            <h1>Contact</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="fullName">First name</label>
                <input {...register("fullName")} />
                <p>{errors.fullName?.message}</p>
                <label htmlFor="subject">Subject</label>
                <input {...register("subject")} />
                <p>{errors.subject?.message}</p>
                <label htmlFor="email">Email</label>
                <input {...register("email")} />
                <p>{errors.email?.message}</p>
                <label htmlFor="body">Message</label>
                <textarea {...register("body")} rows="5" />
                <p>{errors.address?.message}</p>
                <button>Submit</button>
            </form>
        </StyledContact>
    );
}

export default Contact;

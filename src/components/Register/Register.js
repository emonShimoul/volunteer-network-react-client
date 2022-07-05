import React from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName")} placeholder="Name" />
                <input {...register("lastName")} placeholder="Last Name" />
                <input type="number" {...register("age")} placeholder="Age" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Register;
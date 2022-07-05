import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../../images/logo.png';
import './Register.css';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container my-5'>
            <img src={logo} alt="" width="200px" className='mb-5' />
            <div className="register-form">
                <h4 className='mb-4 fw-bold text-start'>Register as a Volunteer</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} type="text" placeholder="Full Name" className='input-group input-field' />
                    <input {...register("lastName")} type="email" placeholder="Email" className='input-group input-field' />
                    <input {...register("date")} type="date" placeholder="Date" className='input-group input-field' />
                    <input {...register("description")} type="text" placeholder="Description" className='input-group input-field' />
                    <input {...register("event")} type="text" placeholder="Event Name" className='input-group input-field' />
                    <input type="submit" className='btn btn-primary mt-4' />
                </form>
            </div>
        </div>
    );
};

export default Register;
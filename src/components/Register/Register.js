import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import logo from '../../images/logo.png';
import './Register.css';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const {user} = useFirebase();
    const onSubmit = data => console.log(data);
    return (
        <div className='container mt-4 mb-5'>
            <Link to="/"><img src={logo} alt="" width="180px" className='mb-4' /></Link>
            <div className="register-form rounded">
                <h4 className='mb-4 fw-bold text-start'>Register as a Volunteer</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName")} type="text" value={user.displayName} className='input-group input-field' />
                    <input {...register("lastName")} type="email" value={user.email} placeholder="Email" className='input-group input-field' />
                    <input {...register("date")} type="date" className='input-group input-field' />
                    <input {...register("description")} type="text" placeholder="Description" className='input-group input-field' />
                    <input {...register("event")} type="text" placeholder="Event Name" className='input-group input-field' />
                    <input type="submit" className='btn btn-primary mt-4 px-5' value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Register;
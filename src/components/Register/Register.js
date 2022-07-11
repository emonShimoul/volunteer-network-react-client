import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Register.css';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const {event} = useParams();
    console.log(event);
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/events';

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(result => result.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("You have been registered successfully!!")    
                navigate(redirect_uri);
            }
        })
    };
    return (
        <div className='container mt-4 mb-5'>
            <Link to="/"><img src={logo} alt="" width="180px" className='mb-4' /></Link>
            <div className="register-form rounded">
                <h4 className='mb-4 fw-bold text-start'>Register as a Volunteer</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} type="text" value={user.displayName || ''} className='input-group input-field' placeholder="Name" required />
                    <input {...register("email")} type="email" value={user.email || ''} placeholder="Email" className='input-group input-field' required />
                    <input {...register("date")} type="date" className='input-group input-field' required />
                    <input {...register("description")} type="text" placeholder="Description" className='input-group input-field' />
                    <input {...register("event")} type="text" value={event} placeholder="Event Name" className='input-group input-field' required />
                    <input type="submit" className='btn btn-primary mt-4 px-5' value="Registration" />
                </form>
            </div>
        </div>
    );
};

export default Register;
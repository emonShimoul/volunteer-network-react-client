import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();

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
                alert("You have been registered successfully!!");
                reset();    
                // navigate(redirect_uri);
            }
        })
    };

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit(onSubmit)} className="row g-3 text-start">
                <div className="col-md-6">
                    <label for="inputTitle4" className="form-label text-start">Event Title</label>
                    <input {...register("eventTitle")} type="text" className="form-control" id="inputTitle4" placeholder='Event Title' />
                </div>
                <div className="col-md-6">
                    <label for="inputDate4" className="form-label">Event Date</label>
                    <input {...register("eventDate")} type="date" className="form-control" id="inputDate4" />
                </div>
                <div className="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea {...register("Description")} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Description'></textarea>
                </div>
                <div className="col-md-6">
                <label for="inputImage4" className="form-label">Image URL</label>
                    <input {...register("imageUrl")} type="text" className="form-control" id="inputImage4" placeholder='Image URL' />
                </div>
                <div className="col-12 text-end mt-4">
                        <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddEvent;
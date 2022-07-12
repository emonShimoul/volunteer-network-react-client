import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Event from '../Event/Event';
import './Events.css';

const Events = () => {
    const[events, setEvents] = useState([]);
    const {user} = useAuth();
    // console.log(user.email);

    useEffect(() => {
        fetch(`https://hidden-eyrie-63764.herokuapp.com/registeredUser/${user.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setEvents(data));
    }, []);

    // Delete 
    const handleRemoveUserEvents = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if(proceed){
            fetch(`https://hidden-eyrie-63764.herokuapp.com/registeredUser/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // console.log(data);
                    alert("Deleted Successfully!!");
                    const remainingEvents = events.filter(event => event._id !== id);
                    setEvents(remainingEvents);
                }
            });
        }
    }

    return (
        <div className="container">
            <div className='events mt-5'>
                {
                    events.map(event => <Event 
                    key = {event._id}
                    userData = {event}
                    handleRemoveUserEvents = {handleRemoveUserEvents}
                    >
                    </Event> )
                }
            </div>
        </div>
    );
};

export default Events;
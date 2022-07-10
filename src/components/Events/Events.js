import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Event from '../Event/Event';

const Events = () => {
    const[events, setEvents] = useState([]);
    const {user} = useAuth();
    // console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/events/${user.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setEvents(data));
    }, []);
    return (
        <div>
            <h2>This is Events</h2>
            {
                events.map(event => <Event 
                key = {event._id}
                userData = {event}
                >
                </Event> )
            }
        </div>
    );
};

export default Events;
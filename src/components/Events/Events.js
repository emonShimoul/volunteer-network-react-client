import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Events = () => {
    const[events, setEvents] = useState([]);
    const {user} = useAuth();
    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/events/${user.email}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            params: {
                user: {user}
            }
        })
        .then(res => res.json())
        .then(data => setEvents(data));
    }, []);
    return (
        <div>
            <h2>This is Events</h2>
            {
                events.map(event => <li key= {event._id}>
                    {event.name} - {event.event}
                </li> )
            }
        </div>
    );
};

export default Events;
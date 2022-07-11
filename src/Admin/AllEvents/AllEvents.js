import React, { useEffect, useState } from 'react';

// For Admin User
const AllEvents = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/events`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setEvents(data));
    }, []);
    console.log(events);

    // Delete 
    const handleRemoveAdminEvents = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if(proceed){
            fetch(`http://localhost:5000/events/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    // console.log(data);
                    alert("Deleted Successfully!!");
                    const remainingEvents = events.filter(user => user._id !== id);
                    setEvents(remainingEvents);
                }
            });
        }
    }

    return (
        <div className='container'>
            <table className="table table-borderless mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Event</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Description</th>
                        <th scope="col">Image URL</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    events.map(event =>
                        <tbody key={event._id}>
                            <tr>
                                <td>{event.eventTitle}</td>
                                <td>{event.eventDate}</td>
                                <td>{event.Description}</td>
                                <td>{event.imageUrl}</td>
                                <td><button className='btn btn-sm btn-danger' onClick={() => handleRemoveAdminEvents(event._id)}>Delete</button></td>
                            </tr>
                    </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default AllEvents;
import React from 'react';

const Event = (props) => {
    const userData = props.userData;
    // console.log(userData._id);
    const handleRemoveEvents = (id) => {
        fetch(`http://localhost:5000/events/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    }
    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{userData.event}</h5>
            <p>{userData.date}</p>
            <button className='btn btn-warning' onClick={() => handleRemoveEvents(userData._id)}>Remove</button>
        </div>
    );
};

export default Event;
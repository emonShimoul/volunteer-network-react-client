import React from 'react';

const Event = (props) => {
    const userData = props.userData;
    console.log(userData);
    const handleRemoveUserEvents = props.handleRemoveUserEvents;
    const {event, date, description} = userData;
    
    // console.log(userData._id);

    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{event}</h5>
            <p>{date}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-warning' onClick={() => handleRemoveUserEvents(userData._id)}>Remove</button>
        </div>
    );
};

export default Event;
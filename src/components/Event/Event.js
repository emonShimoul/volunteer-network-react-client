import React from 'react';

const Event = (props) => {
    const userData = props.userData;
    const handleRemoveEvents = props.handleRemoveEvents;
    const {eventTitle, eventDate} = userData;
    
    // console.log(userData._id);

    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{eventTitle}</h5>
            <p>{eventDate}</p>
            <button className='btn btn-warning' onClick={() => handleRemoveEvents(userData._id)}>Remove</button>
        </div>
    );
};

export default Event;
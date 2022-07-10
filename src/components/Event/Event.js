import React from 'react';

const Event = (props) => {
    const userData = props.userData;
    const handleRemoveEvents = props.handleRemoveEvents;
    const {event, date} = userData;
    
    // console.log(userData._id);

    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{event}</h5>
            <p>{date}</p>
            <button className='btn btn-warning' onClick={() => handleRemoveEvents(userData._id)}>Remove</button>
        </div>
    );
};

export default Event;
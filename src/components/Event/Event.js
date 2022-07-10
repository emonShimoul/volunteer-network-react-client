import React from 'react';

const Event = (props) => {
    const userData = props.userData;
    console.log(userData);
    return (
        <div className='bg-secondary text-white m-4 py-4 rounded-3'>
            <h5>{userData.event}</h5>
            <p>{userData.date}</p>
            <button className='btn btn-warning'>Remove</button>
        </div>
    );
};

export default Event;
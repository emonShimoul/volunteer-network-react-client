import React from 'react';

const Event = (props) => {
    const userData = props.userData;
    console.log(userData);
    return (
        <div>
            <p>{userData.event}</p>
        </div>
    );
};

export default Event;
import React, { useEffect, useState } from 'react';

const RegisterList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/registerList`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    console.log(users);

    // Delete 
    const handleRemoveEvents = (id) => {
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
                    const remainingUsers = users.filter(user => user._id !== id);
                    setUsers(remainingUsers);
                }
            });
        }
    }

    return (
        <div className='container'>
            <table className="table table-borderless mt-5">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Registration Date</th>
                        <th scope="col">Events</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    users.map(user =>
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.date}</td>
                                <td>{user.event}</td>
                                <td><button className='btn btn-sm btn-danger' onClick={() => handleRemoveEvents(user._id)}>Delete</button></td>
                            </tr>
                    </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default RegisterList;
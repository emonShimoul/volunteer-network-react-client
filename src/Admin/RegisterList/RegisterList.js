import React, { useEffect, useState } from 'react';

// For Admin User
const RegisterList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://hidden-eyrie-63764.herokuapp.com/registeredUser`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);
    // console.log(users);

    // Delete 
    const handleRemoveRegisterList = (id) => {
        const proceed = window.confirm("Are you sure, you want to delete?");
        if(proceed){
            fetch(`https://hidden-eyrie-63764.herokuapp.com/registeredUser/${id}`, {
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
                        <tbody key={user._id}>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.date}</td>
                                <td>{user.event}</td>
                                <td><button className='btn btn-sm btn-danger' onClick={() => handleRemoveRegisterList(user._id)}>Delete</button></td>
                            </tr>
                    </tbody>
                    )
                }
            </table>
        </div>
    );
};

export default RegisterList;
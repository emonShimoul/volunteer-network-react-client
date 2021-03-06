import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [allEvents, setAllEvents] = useState([]);
    useEffect(() => {
        fetch(`https://hidden-eyrie-63764.herokuapp.com/events`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => setAllEvents(data));
    }, []);
    // console.log(allEvents);
    return (
        <div className='my-5'>
            <div className="container">
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <div className="input-group mb-3 w-25 mx-auto mt-4">
                    <input type="text" className="form-control" placeholder="Search for Event" aria-label="Search for Event" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>

                <div className="row row-cols-1 row-cols-md-4 mt-4 g-4">
                {
                    allEvents.map(event => 

                        <div key={event._id} className="col">
                            <div className="card">
                            <img src={event.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{event.eventTitle}</h5>
                                <p className="card-text"></p>
                                <Link className='text-decoration-none text-white' to={`/register/${event.eventTitle}`}><Button variant="primary mx-3">Register</Button></Link>
                            </div>
                            </div>
                        </div>
                        
                        // <div className="col">
                        //     <div className="card event-card">
                        //         <img src="https://i.ibb.co/34bDjLB/animal-Shelter.png" className="card-img-top" alt="..." />
                        //         <div className="card-body">
                        //             <h5 className="card-title text-white">{event.event}</h5>
                        //         </div>
                        //     </div>
                        // </div>
                    
                    )
                }
                </div>
            </div>
        </div>
    );
};

export default Home;
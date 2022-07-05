import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <div className="input-group mb-3 w-25 mx-auto mt-4">
                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card event-card">
                        <img src="https://i.ibb.co/34bDjLB/animal-Shelter.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.ibb.co/Lv9HgmP/babySit.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.ibb.co/8j3BVwX/bird-House.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                        <img src="https://i.ibb.co/ZdrCTSz/child-Support.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
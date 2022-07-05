import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='mt-5'>
            <div className="container">
                <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
                <div class="input-group mb-3 w-25 mx-auto mt-4">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>

                <div className="events mt-5">
                    <div className='event'>
                        <img src="https://i.ibb.co/ZdrCTSz/child-Support.png" alt="Child Support" />
                        <div className='empty'></div>
                        <p>Child Support</p>
                    </div>
                    <div className='event'>
                        <img src="https://i.ibb.co/8snPvmQ/refuse-Shelter.png" alt="Refuge Shelter" />
                        <div className='empty'></div>
                        <p>Animal Shelter</p>
                    </div>
                    <div className='event'>
                        <img src="https://i.ibb.co/fScZ74w/food-Charity.png" alt="Food Charity" />
                        <div className='empty'></div>
                        <p>Food Charity</p>
                    </div>
                    <div className='event'>
                        <img src="https://i.ibb.co/34bDjLB/animal-Shelter.png" alt="Animal Shelter" />
                        <div className='empty'></div>
                        <div className='empty'></div>
                        <p>Host a clothing swap</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
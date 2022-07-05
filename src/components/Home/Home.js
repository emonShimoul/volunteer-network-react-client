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

                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
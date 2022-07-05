import React from 'react';

const Home = () => {
    return (
        <div className='mt-5'>
            <h2>I GROW BY HELPING PEOPLE IN NEED.</h2>
            <div class="input-group mb-3 w-25 mx-auto mt-4">
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    );
};

export default Home;
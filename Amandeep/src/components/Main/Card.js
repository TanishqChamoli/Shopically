/*This is the card using which product will be shown
Pass parameter product id to this function and retrieve the information using this id from the database
If you want you can change this simple function into class
This card will be used in home page, search page and shop display page*/

import React from 'react';
import './Main.css'
const card=()=>{
    return(
        <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

export default card;

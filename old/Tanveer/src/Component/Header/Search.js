import React from 'react';
import './Header.css'
const search=()=>{
    return (
        <div className="shop-search">
            <form className="form-inline my-2 my-lg-0">
                    <input className="" type="search" placeholder="Search"></input>
                    <button className="" type="submit">Search</button>
            </form>
        </div>
    );
}

export default search;
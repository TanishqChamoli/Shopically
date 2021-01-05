import React from 'react';
import './Header.css'
const search=()=>{
    return (
        <form className="form-inline my-2 my-lg-0 flex-item">
                <input className="form-control mr-sm-2 " type="search" ></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    );
}

export default search;
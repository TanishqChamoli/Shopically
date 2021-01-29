import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
const search=()=>{
    return (
        <div className="shop-search">
            <form className="form-inline my-2 my-lg-0">
                    <input className="" type="search" placeholder="Search"></input>
                    <button className="search_icon" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
    );
}

export default search;
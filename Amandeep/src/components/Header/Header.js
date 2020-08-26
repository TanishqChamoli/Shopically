import React from 'react'
import LoggedIn from './Loggedin';
import LoggedOut from './Loggedout';
import './Header.css'
const header=(props)=>{
    let logout=true;
    if(logout)
    {
        return (
            <header className="search_header">
                <nav className="navbar">
                    <h1 className="navbar_h1">Shopically</h1>
                    <p className="navbar_p">Your location</p>
                    <form className="navbar_form" action="/">
                        <input className="navbar_form_input" type="search" />
                        <button className="navbar_form_button">Search</button>
                    </form>
                    <LoggedOut />
                </nav>
            </header>
            )
    }
    else
    {
        return (
            <header>
                <nav className="navbar">
                    <h1 className="navbar_h1">Shopically</h1>
                    <p className="navbar_p">Your location</p>
                    <form className="navbar_form" action="/">
                        <input className="navbar_form_input" type="search" />
                        <button className="navbar_form_button">Search</button>
                    </form>
                    <LoggedIn/>   
                </nav>
            </header>
            );
    }
    
}

export default header
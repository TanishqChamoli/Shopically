import React,{Fragment} from 'react';
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import User from './User'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const header=(props)=>{
return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="flex-container">
                <Logo />
                <Location/>
                <Search />
                <User />
            </div>
        </nav>
);
}
export default header;

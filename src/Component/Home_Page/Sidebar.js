import React from 'react';
import { withRouter } from 'react-router-dom';
class Sidebar extends React.Component {
    openNav=()=>{
        document.getElementById("mySidenav").style.width = "250px";
      }
    closeNav=()=> {
        document.getElementById("mySidenav").style.width = "0";
      }
    render() {
        return (
            <div className="sidebar">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
                <span className="threeBtnicon" onClick={this.openNav}>&#9776;</span>
                
            </div>
        );
    }
}
export default withRouter(Sidebar);
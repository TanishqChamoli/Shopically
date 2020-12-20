import React, { Component }from 'react'

export class Header extends Component {

    render() {
        return (
            <div class="Header">
                < div class = "w3-mobile w3-top" >
                    <div class="w3-bar w3-black w3-card w3-right-align w3-large">
                        <button href="#home" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><i class="fa fa-home"></i></button>
                        <div class="w3-dropdown-hover">
                            <button class = "w3-bar-item w3-button w3-hide-small w3-padding-large w3-black" >&nbsp;&nbsp;&nbsp;&nbsp;Location!&nbsp;&nbsp;&nbsp;&nbsp;</button>&nbsp;
                            <div class="w3-dropdown-content w3-bar-block w3-border">
                                <a href="_self" class="w3-bar-item w3-button w3-hide-small w3-padding-large">Chandiagrh</a>
                                <a href="_self" class="w3-bar-item w3-button w3-hide-small w3-padding-large">Panchkula</a>
                                <a href="_self" class="w3-bar-item w3-button w3-hide-small w3-padding-large">Mohali</a>
                            </div>
                        </div>
                        <input type="text" class="w3-bar-item w3-input w3-text-white w3-hide-small w3-padding-large w3-hover-white" placeholder="Search Product..." name="search"></input>
                        <button type="submit" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"><i class="fa fa-search"></i></button>
                        <button href="#signup" class="w3-bar-item w3-button w3-right-align w3-hide-small w3-padding-large w3-hover-white w3-right">Sign Up</button>
                        <button href="#profile" class="w3-bar-item w3-button w3-right-align w3-hide-small w3-padding-large w3-hover-white w3-right">LOGIN</button>
                    </div>
                </div>
            </div>
        )
    }
                       
}
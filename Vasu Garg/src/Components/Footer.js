import React, { Component }from 'react'

export class Footer extends Component {

    render() {
        return (
            <div class = "w3-bottom" >
                <footer class="w3-container w3-grey w3-padding-32 w3-center w3-opacity">
                    <div class="w3-xlarge w3-padding-25">
                        <i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>&nbsp;
                        <i class="fa fa-instagram w3-hover-opacity w3-large"></i>&nbsp;
                        <i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>&nbsp;
                        <i class="fa fa-snapchat w3-hover-opacity w3-large"></i>&nbsp;
                        <i class="fa fa-twitter w3-hover-opacity w3-large"></i>&nbsp;
                        <i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
                    </div>
                    <p class="w3-text-black">TEAM SHOPICALLY</p>
                </footer>
            </div>
        )
    }
                       
}
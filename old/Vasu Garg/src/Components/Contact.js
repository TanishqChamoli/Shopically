import React, { Component }from 'react'

export class Contact extends Component {

    render() {
        return (
            <div>
                <br /><br /><br />
                <div class="w3-container w3-white w3-content w3-padding-64" id="contact">
                    <h2 class = "w3-wide w3-center">CONTACT</h2>
                    <div class="w3-row w3-padding-32">
                        <div class="w3-col m6 w3-large w3-margin-bottom">
                            <i class="fa fa-map-marker"></i> CCET-26, Chandigarh, India<br />
                            <i class="fa fa-envelope"> </i> Email: shopically@gmail.com<br />
                        </div>
                        <div class="w3-col m6">
                            <form action="/action_page.php" target="_blank">
                                <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name" /><br />
                                <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email" /><br />
                                <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
                                <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
                       
}
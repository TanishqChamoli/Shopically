import React, { Component } from 'react'

export class AccountForm extends Component {
    render() {
        return (
            <div>
                < div class = "w3-container w3-card-4 w3-light-gray w3-padding-64" >
                    <div class="w3-container w3-blue">
                        <h2>Account Details</h2>
                    </div>
                        <form class="w3-container"><br />
                            <label>First Name</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Last Name</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Gender</label><br /><br />
                            <input class="w3-radio w3-white" type="radio" name="gender" value="male" />
                            <label>&nbsp;Male&nbsp;&nbsp;</label>
                            <input class="w3-radio w3-white" type="radio" name="gender" value="female" />
                            <label>&nbsp;Female</label><br /><br />
                            <label>Phone no.</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Email</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Shop Name</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Shop Address</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Shop Phone no.</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Shop Type</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <label>Shop Picncode</label><br /><br />
                            <input class="w3-input" type="text" /><br />
                            <button class="w3-btn w3-blue">Register</button><br />
                        </form>
                    </div>                    
                </div>
        )
    }
}

export default AccountForm

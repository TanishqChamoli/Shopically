import React, {Component}  from "react"
import Header from "../Header/Header"

class Buynow extends Component {
    render() {
        return(
            <div>
                <Header />
                <div>
                   
                        Order Details
                    
                </div>
                <div>
                    <form action="" method="post">
                    <table>
                        <tr>
                            <p>Name</p>
                            <input type="text" ></input>
                        </tr>
                        <tr>
                            <p>Phone No.</p>
                            <input type="number" ></input>
                        </tr>
                        <tr>
                            <p>Address</p>
                            <input type="text" ></input>
                        </tr>
                        <tr>
                            <p>e-mail</p>
                            <input type="text" ></input>
                        </tr>
                        <tr>
                            Payment only cash on delivery
                        </tr>
                        <tr>
                            <br />
                            <button type="submit">Confirm Order</button>
                        </tr>
                    </table>  
                    </form>
                </div>
            </div>
        )
    }
}

export default Buynow;
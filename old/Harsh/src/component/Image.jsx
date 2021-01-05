import React, {Component} from 'react';
import axios from 'axios';
const API_PATH = 'http://localhost:80/get_product.php';
class Image extends Component {

    componentDidMount() {
        axios.get(`${API_PATH}`).then(response=> {
                console.log(response);
            });
        }

    render() {
        return(
           <div>
               <image src="">pictures here</image>
           </div>
        )
    }
}

export default Image;

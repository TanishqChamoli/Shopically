import React, {Component} from 'react';

class Image extends Component {
    render() {
        return(
           <div>
               <image src={this.props.src} className="prdt_img">pictures here</image>
           </div>
        )
    }
}

export default Image;
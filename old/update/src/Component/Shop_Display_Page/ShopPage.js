import React from 'react';
import { withRouter } from 'react-router-dom';
import ShopDetail from './ShopDetail';
class ShopPage extends React.Component {
    render() {
        return (
            <div>
                <ShopDetail />
            </div>
        );
    }
}
export default withRouter(ShopPage);
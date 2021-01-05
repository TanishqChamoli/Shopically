import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductDetail from './ProductDetail';
class ProductPage extends React.Component {
    render() {
        return (
            <div>
                <ProductDetail />
            </div>
        );
    }
}
export default withRouter(ProductPage);
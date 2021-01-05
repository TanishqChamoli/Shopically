import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchHome from './SearchHome';
import SearchItems from './SearchItems';
class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <SearchHome/>
                <SearchItems/>
            </div>
        );
    }
}
export default withRouter(SearchPage);
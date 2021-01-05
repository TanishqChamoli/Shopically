import React from 'react';
import { withRouter } from 'react-router-dom';
import FullSearchPage from './FullSearchPage';
class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <FullSearchPage/>
            </div>
        );
    }
}
export default withRouter(SearchPage);

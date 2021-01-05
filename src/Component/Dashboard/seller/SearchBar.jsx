import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        return(
            <div className="searchbar">
                <center>
                    <input type="text" id="search-input"></input>
                    <button id="search-btn">Search</button>
                </center>
            </div>
        )
    }
}

export default SearchBar
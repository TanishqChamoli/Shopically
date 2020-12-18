import React from 'react';
import { withRouter } from "react-router-dom";
class HomeSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationSelect:'chd', searchBySelect:'shop' ,querySearch: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDetect = this.handleDetect.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.querySearch!='')
      this.props.history.push("/search?loc=" + this.state.locationSelect + "&sby=" + this.state.searchBySelect + "&q=" + this.state.querySearch);
  }
  handleDetect(event) {
    //GeoLocation
    window.confirm("Allow Location Sharing?");
  }

  render() {
    return (
      <div className="searchSection search_header">
        <h1 className="brand">Shopically</h1>
        <form className="searchform" onSubmit={this.handleSubmit}>
          <div className="complete-div">
            <div className="second-div">
              <div className="div-second-div"> 
                <select className="city" name="locationSelect" value={this.state.locationSelect} onChange={this.handleChange}>
                  <option value="chd">Chandigarh</option>
                  <option value="moh">Mohali</option>
                  <option value="pun">Panchkula</option>
                </select>
                <select className="item" name="searchBySelect" value={this.state.searchBySelect} onChange={this.handleChange}>
                  <option value="shop">Shop</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <input className="searchbar" placeholder="Search" type="text" name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
            </div>
            <div className="third-div">
              <div>
                <input className="detectButton" id="detect2" type="button" value="Detect" onClick={this.handleDetect} />
              </div>
              <div>
                <input className="submitButton" type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(HomeSearchBar);
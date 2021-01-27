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
      <div className="search_header">
        <form className="searchform" onSubmit={this.handleSubmit}>
          <div className="complete-div">
          <img src="logo final.png" alt="logo" class="logo"/>
            <div className="second-div">
              <div className="div-second-div"> 
                <select className="city" name="locationSelect" value={this.state.locationSelect} onChange={this.handleChange}>
                  <option value="chd">Chandigarh</option>
                  <option value="moh">Mohali</option>
                  <option value="pun">Panchkula</option>
                </select>&nbsp;&nbsp;
                <select className="item" name="searchBySelect" value={this.state.searchBySelect} onChange={this.handleChange}>
                  <option value="shop">Shop</option>
                  <option value="product">Product</option>
                </select>
              </div>
              <input className="search" placeholder="Search" type="text" name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
            </div>
            {/* <div className="third-div">
              <div>
                <input className="detectButton" id="detect2" type="button" value="Detect" onClick={this.handleDetect} />
              </div>
              <div>
                <input className="submitButton" type="submit" value="Submit" />
              </div>
            </div> */}
          </div>
        </form>
        <div className="scroll-Down">
          <center>
          Scroll Down<br />
          <img className="scroll-Down-Arrow" src="Down Arrow.png" />
          </center>
        </div>
      </div>
    );
  }
}
export default withRouter(HomeSearchBar);
import React from 'react';
import './home_page.css';
import { withRouter } from "react-router-dom";
class SearchHome extends React.Component {
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
    /*let formData = new FormData();
    formData.append("locationQuery", this.state);
    formData.append("searchbyQuery", this.state);
    formData.append("originalQuery", this.state);
    const url = "http://localhost:80/homepage/my-app/backend/searchpage.php";
    axios.post(url, formData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));*/
    if (this.state.querySearch!=='')
      this.props.history.push("/search?loc=" + this.state.locationSelect + "&sby=" + this.state.searchBySelect + "&q=" + this.state.querySearch);
  }
  handleDetect(event) {
    //GeoLocation
    window.confirm("Allow Location Sharing?");
  }

  render() {
    return (
      <div class="search_header">
        <h1 className="brand">SHOPICALLY - SHOP LOCALLY</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="second-div"> 
              <select className="city" name="locationSelect" value={this.state.locationSelect} onChange={this.handleChange}>
                <option value="chd">Chandigarh</option>
                <option value="moh">Mohali</option>
                <option value="pun">Panchkula</option>
              </select>&nbsp;&nbsp;
              <select className="item" name="searchBySelect" value={this.state.searchBySelect} onChange={this.handleChange}>
                <option value="shop">Shop</option>
                <option value="product">Product</option>
            </select>
            <input className="search" type="text" name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
          </div>          
          <div className="third-div"> 
            <input className="detectButton" type="button" value="Detect" onClick={this.handleDetect} />            
            <input className="submitButton" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SearchHome);
import React from 'react';
import axios from 'axios';
class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationSelect:'', searchBySelect:'' ,querySearch: ''};

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
  }
  handleDetect(event) {
    //GeoLocation
    window.confirm("Allow Location Sharing?");
  }

  render() {
    return (
      <div className="searchSection">
        <form onSubmit={this.handleSubmit}>
          <select name="locationSelect" value={this.state.locationSelect} onChange={this.handleChange}>
            <option value="chd">Chandigarh</option>
            <option value="moh">Mohali</option>
            <option value="pun">Panchkula</option>
          </select>
          <select name="searchBySelect" value={this.state.searchBySelect} onChange={this.handleChange}>
            <option value="shop">Shop</option>
            <option value="product">Product</option>
          </select>
          <input type="text" name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
          <input type="button" value="Detect" onClick={this.handleDetect} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default SearchHome;

import React from "react";
import { withRouter } from "react-router-dom";
class SearchHome extends React.Component {
  constructor(props) {
    super(props);
    //as we have made some things as default then we can select the location to be moh and the other part as product
    this.state = {
      locationSelect: "chd",
      searchBySelect: "product",
      querySearch: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDetect = this.handleDetect.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const path = "/search?q=" + this.state.querySearch;
    this.props.history.push(path);
  }
  showPosition(position) {
    // we have to convert this latitude range and longitude range valid in diff cities[mohali,chd,panchkula]
    alert(
      "Latitude: " +
        position.coords.latitude +
        "   Longitude: " +
        position.coords.longitude
    );
    console.log(
      "Latitude: " +
        position.coords.latitude +
        "   Longitude: " +
        position.coords.longitude
    );
  }
  getLocation() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, options);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  handleDetect(event) {
    //GeoLocation
    // need to format the data in a better way
    // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    const api = "AIzaSyAMyiHxjb0ZVepNyIWT_FOmnHRufiePvUM";
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      console.log(
        url +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&key=" +
          api
      );
      const response = fetch(
        url +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "&key=" +
          api
      );
      const data = JSON.stringify(response);
      console.log(data);
    });
  }

  render() {
    return (
      <div className="searchSection">
        <form onSubmit={this.handleSubmit}>
          <select name="locationSelect" onChange={this.handleChange}>
            <option value="chd">Chandigarh</option>
            <option value="moh">Mohali</option>
            <option value="pun">Panchkula</option>
          </select>
          <select name="searchBySelect" onChange={this.handleChange}>
            <option value="shop">Shop</option>
            <option value="product">Product</option>
          </select>
          <input type="text" name="querySearch" onChange={this.handleChange} />
          <input type="button" value="Detect" onClick={this.handleDetect} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withRouter(SearchHome);

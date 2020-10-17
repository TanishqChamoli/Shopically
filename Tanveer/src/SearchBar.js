import axios from 'axios';
import React from 'react';
import queryString from 'query-string';
import { withRouter } from "react-router-dom";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { locationSelect: 'chd', searchBySelect: 'shop', querySearch: '', colours: [], brands: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    //this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.querySearch!='')
      this.props.history.push("/search?loc=" + this.state.locationSelect + "&sby=" + this.state.searchBySelect + "&q=" + this.state.querySearch + "&colours=" + this.state.colours + "&brands=" + this.state.brands);
  }

  handleFilterChange(event) {
    this.setState({ [event.target.name]: Array.from(event.target.selectedOptions, (item) => item.value) });
    //console.log(event.target.selectedOptions);
  }
  // handleFilterSubmit(event) {
  //   axios.post("http://localhost:80/homepage/my-app/backend/filter.php", formData)
  //     .then(response => {
  //       this.setState({
  //         items: response.data
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   event.preventDefault();
    
  // }
 /* componentDidMount() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    this.querytag.value = params["q"];
  }

  componentDidUpdate() {
    let url = this.props.location.search;
    let params = queryString.parse(url);
    this.querytag.value=params["q"];
  }*/
  
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
          <input type="text" /*ref={c => this.querytag = c}*/ name="querySearch" value={this.state.querySearch} onChange={this.handleChange} />
          <input type="submit" value="Search" /><br/>

          <label for="colours">Choose the colours:</label>
          <select name="colours" id="colours" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>

          <label for="brands">Choose the brands:</label>
          <select name="brands" id="brands" multiple={true} value={this.state.value} onChange={this.handleFilterChange}>
            <option value="adidas">Adidas</option>
            <option value="nike">Nike</option>
            <option value="levis">Levis</option>
          </select>
        </form>
      </div>
    );
  }
}
export default withRouter(SearchBar);
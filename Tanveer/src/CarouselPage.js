import React from "react";
import CardsItem from "./CardsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default class CarouselPage extends React.Component {
  constructor() {
    super();
    this.state = {
      itemsData: [],
      itemsData2: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:80/homepage/my-app/backend/homepagedata.php";
    axios
      .get(url)
      .then((response) => {
        this.setState({
          itemsData: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    const url2 =
      "http://localhost:80/homepage/my-app/backend/homepagedata2.php";
    axios
      .get(url2)
      .then((response) => {
        this.setState({
          itemsData2: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const itemData = this.state.itemsData.map((item) => (
      <CardsItem
        id={item.product_id}
        imageURL={item.product_image}
        productName={item.product_brand}
        desc={item.product_name}
        price={item.product_price}
      />
    ));

    const itemData2 = this.state.itemsData2.map((item) => (
      <CardsItem
        id={item.id}
        imageURL={item.user}
        productName={item.content}
        desc={item.word_count}
        price={item.topic}
      />
    ));

    return (
      <Container>
        <h2>Mobiles</h2>
        <Row>{itemData}</Row>
        <h2>Clothes</h2>
        <Row>{itemData2}</Row>
      </Container>
    );
  }
}

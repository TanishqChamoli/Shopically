import React from 'react';
import CardsItem from './CardsItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class CarouselPage extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            itemsData: []
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch("")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    itemsData: data
                })
            })
    }

    render() {
        
        
        return (
            <Container>
                <Row>
                    {itemData}
                </Row>
            </Container>
        )
    }
}
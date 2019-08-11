import React from "react";
import { Image, Card, Button, CardDeck, Row, Col, Container } from "react-bootstrap";
import acorus_calamus from '../static/images/acorus_calamus.png';
import plants_mock from '../static/plants.json';
import PlantCard from "./PlantCard";

export default class DailyPlants extends React.Component {

    state = {
        plants: []
    }

    componentWillMount() {
        const plantsIndexes = this.getFourRandomDigits();
        const plants = plants_mock.filter(plant => plantsIndexes.includes(plants_mock.indexOf(plant)));
        this.setState({ plants });
    }

    getFourRandomDigits() {
        var arr = [];
        while (arr.length < 4) {
            let index = Math.floor(Math.random() * plants_mock.length);
            if (!arr.includes(index)) arr.push(index);
        }
        return arr;
    }

    render() {
        return (
            <Container fluid={true} className="text-center my-4">
                <h1>Plants of the day</h1>
                <Row className="justify-content-around my-4">
                    {this.state.plants.map(
                        plant => {
                            return (
                                <Col xs={11} sm={5} xl={3} className="m-xl-0 my-sm-4 my-2" >
                                    <PlantCard plant={plant} />
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>
        );
    }
}

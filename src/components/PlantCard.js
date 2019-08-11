import { Image, Card, Button, CardDeck, Row, Col } from "react-bootstrap";
import React from "react";

export default class PlantCard extends React.Component {
    render() {
        const plantImage = require('../static/images/' + this.props.plant.images[0]);
        return (
            <Card border="success" className="text-left">
                <Card.Img variant="top" src={plantImage} style={{objectFit: "cover", height: 200}} />
                <Card.Body>
                    {/* Must switch between Uzb and Rus */}
                    <Card.Title>{this.props.plant.uzbekName}</Card.Title>
                    <Card.Subtitle>{this.props.plant.latinName}</Card.Subtitle>
                    <Card.Text>Lorem ipsum</Card.Text>
                    <Button variant="primary">Read more</Button>
                </Card.Body>
            </Card>
        )
    }
}
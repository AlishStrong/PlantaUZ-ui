import React, { Component } from 'react'
import { Image, Card, Button, CardDeck, Row, Col, Container } from "react-bootstrap";

const data = {
    latinName: "Acorus calamus",
    uzbekName: "Ig'ir",
    russianName: "Аир обыкновенный",
    descriptionUzb: "Ig'ir",
    descriptionRus: "Аир обыкновенный",
    descriptionEng: "Norma Jeane Mortenson",
    regions: ["Samarkand"],
    chemicalComposition: "",
    medicalApplication: "",
    images: ["acorus_calamus.png"],
    family: "Acoraceae",
    descriptionTitle: ["Описание растения"],
    description: ["Аир обыкновенный – многолетнее травянистое растение семейства аирных – Acoraceae, достигающее в высоту 60-120 см, с горизонтальным, ползучим, извилистымкорневищем"]
}

export default class plan extends Component {

    state = {
        _id: ''
    }
    componentDidMount() {

    }
    
    render() {
        const img = require('../static/images/' + data.images[0])
        return (
            <Container fluid={true} className="my-4">
                <Row className="justify-content-center">
                    <Col lg={8} className="my-2">
                        <h1>{data.latinName}</h1>
                            {data.descriptionTitle.map((el,index) => 
                            <div key={index}>
                                <h3>{el}</h3>
                                <p>{data.description[index]}</p>
                            </div>
                        )}
                    </Col>
                    <Col lg={4} className="my-2">
                        <Card style={{ width: '18rem', margin: '0 auto' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{data.latinName}</Card.Title>
                                <Card.Text><strong>Latin name</strong> {data.latinName} </Card.Text>
                                <Card.Text><strong>Family</strong> {data.family} </Card.Text>
                                <Card.Text><strong>Regions</strong> {data.regions.map((el,index) => <span key={index}>{el} </span>)} </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                            {/* <div style={{ display: 'flex', marginTop: '2rem'}}>
              <div style={{width: '69%'}}>
                <h1>{data.latinName}</h1>
                {data.descriptionTitle.map((el,index) => 
                  <div key={index}>
                    <h3>{el}</h3>
                    <p>{data.description[index]}</p>
                  </div>
                )}
              </div>                

              <div style={{width: '29%', marginLeft: '1rem'}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.images[0]} />
                <Card.Body>
                    <Card.Title>{data.latinName}</Card.Title>
                    <Card.Text><strong>Latin name</strong> {data.latinName} </Card.Text>
                    <Card.Text><strong>Family</strong> {data.family} </Card.Text>
                    <Card.Text><strong>Regions</strong> {data.regions.map((el,index) => <span key={index}>{el} </span>)} </Card.Text>
                </Card.Body>
                </Card>
              </div>
            </div> */}

            </Container>

        )
    }
}

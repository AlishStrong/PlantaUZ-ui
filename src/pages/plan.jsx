import React, { Component } from 'react'
import { Image, Card, Button, CardDeck, Row, Col } from "react-bootstrap";

const data = {
    latinName: "Marilyn Monroe",
    uzbekName: "Ig'ir",
    russianName: "Аир обыкновенный",
    descriptionUzb: "Ig'ir",
    descriptionRus: "Аир обыкновенный",
    descriptionEng: "Norma Jeane Mortenson",
    regions: ["Los Angeles", "Miami"],
    chemicalComposition: "",
    medicalApplication: "",
    images: ["https://upload.wikimedia.org/wikipedia/commons/4/4e/Monroecirca1953.jpg"],
    family: "Kalifornia",
    descriptionTitle: ["Life and career", "Modeling and first film roles", "Breakthrough years"],
    description: ["Monroe was born Norma Jeane Mortenson at the Los Angeles County Hospital on June 1, 1926 as the third child of Gladys Pearl Baker (née Monroe, 1902–1984).[4] Gladys was the daughter of two poor Midwesterners who had migrated to California.[5] At the age of 15, she married a man nine years her senior, John Newton Baker, and had two children by him, Robert (1917–1933)[6] and Berniece (b. 1919).", "In April 1944, Dougherty was shipped out to the Pacific, and he would remain there for most of the next two years.[47] Monroe moved in with his parents and began a job at the Radioplane Company, a munitions factory in Van Nuys", "In 1950, Monroe had bit parts in Love Happy, A Ticket to Tomahawk, Right Cross and The Fireball, but also appeared in minor supporting roles in two critically acclaimed films: Joseph Mankiewicz's drama"]
}

export default class plan extends Component {

    state = {
        _id: ''
    }
    componentDidMount() {

    }
    
    render() {
        return (
            <div style={{ display: 'flex', marginTop: '2rem'}}>
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
            </div>
        )
    }
}

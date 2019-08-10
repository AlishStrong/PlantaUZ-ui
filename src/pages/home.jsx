import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import UzbekistanMap from "../components/UzbekistanMap";
import DailyPlants from "../components/DailyPlants";
function Home() {
  return (
    <div>
      <UzbekistanMap />

      <Form inline className="d-flex justify-content-center m-100">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <DailyPlants />
    </div>
  );
}

export default Home;

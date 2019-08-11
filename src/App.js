import React from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./pages/home";
import Plan from './pages/plan';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar>
      <Container>
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/plan/:id" component={Plan} />
        </Switch>
      </BrowserRouter>     
      </Container>
    </div>
  );
}

export default App;

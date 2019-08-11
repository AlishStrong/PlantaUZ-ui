import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Container } from "react-bootstrap";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
import { directive } from "@babel/types";

function App() {
  return (
    <div>
      <Navigator />
      <Container>
        <Home style={{ paddingTop: 10, border: 1, borderStyle: "dotted" }} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;

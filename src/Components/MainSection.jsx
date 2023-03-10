// 7a852a40

import { Component } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Gallery from "./Gallery";

class MainSection extends Component {
  render() {
    return (
      <Container className="d-flex main-container">
        <>
          <h2>Media</h2>
          <Row>
            <Gallery />
          </Row>
        </>
      </Container>
    );
  }
}

export default MainSection;

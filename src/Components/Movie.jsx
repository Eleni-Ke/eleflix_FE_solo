import { Card, Col } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.singleMovie.poster} />
        <Card.Body>
          <Card.Title>{props.singleMovie.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Movie;

import { Card, Col } from "react-bootstrap";

const Movie = (props) => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={props.singleMovie.poster} />
        <Card.Body>
          <Card.Title>{props.singleMovie.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <a
            // onClick={stopPropagation()}
            href={`${process.env.REACT_APP_BE_URL}/medias/${props.singleMovie.id}/pdf`}
          >
            Click here to download the Information
          </a>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Movie;

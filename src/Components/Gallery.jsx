import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Movie from "./Movie";

class Gallery extends Component {
  state = {
    sagaArr: [],
    isLoading: true,
    isError: false,
  };
  getSaga = async () => {
    try {
      let response = await fetch(process.env.REACT_APP_BE_PROD_URL + "/medias");
      if (response.ok) {
        let mediaArr = await response.json();
        console.log(mediaArr);
        // mediaArr = mediaArr.Search;
        // this.setState({
        //   sagaArr: mediaArr,
        //   isLoading: false,
        // });
      } else {
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getSaga();
  }

  render() {
    return (
      <>
        {this.state.isLoading && <Spinner animation="border" variant="light" />}
        {this.state.isError && (
          <Alert variant="danger">Aww snap, we got an error! 🌩️</Alert>
        )}

        {this.state.sagaArr.map((movie) => {
          return <Movie singleMovie={movie} key={movie.imdbID} />;
        })}
      </>
    );
  }
}

export default Gallery;

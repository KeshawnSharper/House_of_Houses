import React from "react";
import { BTNgreen, MovieWrapper, MoviesTitle, MovieUl, MovieLi } from ".";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FourkMovies = (props) => {
  let properties = props.properties.filter(
    (property) => property.thumbnail != null && property.thumbnail
  );
  console.log(`hey`, properties);
  return (
    <MovieWrapper>
      <MoviesTitle>
        <h2>LATEST HOMES</h2>
        {/* <BTNgreen>SEARCH</BTNgreen> */}
      </MoviesTitle>
      <MovieUl>
        {properties.slice(0, 4).map((property) => (
          <MovieLi>
            <Link to={`/product/${property.property_id}`}>
              {" "}
              <img src={property.thumbnail} alt="movie poster" height="350px" />
            </Link>
          </MovieLi>
        ))}
      </MovieUl>
      <MovieUl>
        {properties.slice(5, 4 + 5).map((property) => (
          <MovieLi>
            <Link to={`/product/${property.property_id}`}>
              {" "}
              <img src={property.thumbnail} alt="movie poster" height="350px" />
            </Link>
          </MovieLi>
        ))}
      </MovieUl>
    </MovieWrapper>
  );
};
function mapStateToProps(state) {
  return {
    properties: state.properties
  };
}

export default connect(mapStateToProps)(FourkMovies);

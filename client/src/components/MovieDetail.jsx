import React from 'react';

class MovieDetail extends React.Component {
  render() {
    if(this.props.movie === null )return null

    return (
      <div className="movie-details">
      <h3>
      {this.props.movie.show_title}
      </h3>
      <p> { this.props.movie.summary} </p>

      <h3> Movie Cast </h3>

      <p> { this.props.movie.show_cast} </p>
      </div>
  
    );
  }
}





export default MovieDetail
import React from 'react';
import MoviesSelector from '../components/MoviesSelector'
import MovieDetail from '../components/MovieDetail'

class MovieContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.state ={
      movies: [],
      selectedMovie: null
    };
    this.setSelectedMovie = this.setSelectedMovie.bind(this);
  }

  render(){
    return(
      <div> 
      <h1>Tom Cruise Movies</h1>
         <MoviesSelector movies={this.state.movies}
           onSelectedMovie={this.setSelectedMovie}
         />

         <MovieDetail movie = {this.state.selectedMovie} />
      </div>
      )
  }

  componentDidMount() {
    const url = 'http://netflixroulette.net/api/api.php?actor=Tom%20Cruise'
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', () => {
      if (request.status !==200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({movies: data, selectedMovie: data[0]})
    })
      request.send()
    }

    setSelectedMovie(movie) {
      this.setState({selectedMovie: movie})
    }


  }


  export default MovieContainer;
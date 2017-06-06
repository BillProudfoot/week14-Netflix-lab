import React from 'react';

class MoviesSelector extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { selectedIndex: ""}

    this.handleChange = this.handleChange.bind(this)
  }


  render () {
    const options = this.props.movies.map((movie, index) => {
      return <option value={index} key={index}>{movie.show_title}</option>
    })
    return (
      <select id="movies" onChange={this.handleChange} value={
        this.setState.selectedIndex
      }>
      {options}
      </select>
      );
  }

handleChange(event) {
  const index = event.target.value
  this.setState({selectedIndex: index })

  const movie = this.props.movies[index]

  this.props.onSelectedMovie(movie)
}

}

export default MoviesSelector
import React from 'react'
import Rating from './Rating'

class MovieCard extends React.Component{ 

  render(){
    return(
      <div className="column-card">
        <div className="card">
          <img src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster}`}/>
          <h4>{this.props.movie.title}</h4>
          <Rating movie={this.props.movie} user={this.props.user}/>
          <button onClick={ () => this.props.addFavorites(this.props.movie)}>Add to Favorites</button>
        </div>
      </div>
    )
  }
}

export default MovieCard

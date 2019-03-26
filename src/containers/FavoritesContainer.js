import React from 'react'
import MovieCard from '../components/MovieCard'
import { Route, Switch, withRouter } from "react-router-dom";

class Upcoming extends React.Component{
  render(){
    let moviesArr = this.props.movies.map(movie => <MovieCard movie={movie} addFavorites={this.props.addFavorites}/> )
    return(
      <div>
      {Object.keys(this.props.user).length > 0 ? (
        <div className="row">
          <h1>Favorites</h1>
          {moviesArr}
          </div>
      ) : this.props.history.push("/")
    }
    </div>
  )
  }
}

export default withRouter(Upcoming)
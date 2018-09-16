import React, { Component } from 'react';
const urlComp = "https://image.tmdb.org/t/p/w342/";
class MovieItem extends Component {

  render() {
    return (
        <div className="col-sm-12 col-md-3">
        <div className="thumbnail">
        <img src={urlComp + this.props.movie.backdrop_path
      } alt="..." />
        <div className="caption">
        <h3>{this.props.movie.title}</h3>
          <p>{this.props.movie.overview}</p>
          <p>Release Date - {this.props.movie.release_date}</p>
          <p>Rattings - {this.props.movie.vote_average}</p>
        <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
      </div>
      </div>
    </div>
    );
  }

}

export default MovieItem;

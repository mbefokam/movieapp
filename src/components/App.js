import React, { Component } from 'react';
import MovieResults from './MovieResults';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movie App</h1>
            <p>Building Movie Application</p>
          </div>
        </div>
        <div>
          <MovieResults />
        </div>
      </div>
    );
  }
}

export default App;

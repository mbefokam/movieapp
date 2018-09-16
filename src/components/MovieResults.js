import React, { Component } from 'react';
import Search from './Search';
import {connect} from 'react-redux';

class MovieResults extends Component {

  render() {
    return (
      <div>
        <Search />
        <h1> Movie Result Will go Here</h1>
      </div>
    );
  }

}

function mapStateToProps(state){
  console.log(state)
  return{

  }
}

export default connect(mapStateToProps,null)(MovieResults)

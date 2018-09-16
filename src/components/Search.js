import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel,Button} from 'react-bootstrap';
import { API_KEY } from '../secrets';
import  {movies } from '../actions';
import {connect} from 'react-redux';
class Search extends Component {
  constructor(props){
    super(props);
    this.state ={
      query:''
    }
  }
  search(){
    console.log('Search button clicked !', this.state.query );
    let url =`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`;
    console.log("URL: ",url);
    fetch(url, {
      method: 'GET'
    }).then(response=> response.json())
    .then(jsonObj => {this.props.movies(jsonObj.results)})
  }

  render() {
    return (
      <div>
      <Form inline className="col-md-6 col-md-offset-3">
        <FormGroup  >
          <ControlLabel>Search</ControlLabel>
          {' '}
          <FormControl
          type="text"
          placeholder="search a movie"
          onChange={(event)=> this.setState({query: event.target.value})}/>
          <FormControl.Feedback />
        </FormGroup>
        {' '}
        <Button bsStyle="success"
        onClick = {()=>{this.search()}}
        >Submit</Button>
      </Form>
      </div>
    );
  }

}

export default connect(null, {movies})(Search);

import React, { Component }from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';
import SearchResults from './SearchResults';

class App extends Component {
constructor(){
  super();
  this.state ={
    hikeLocation: '',
    setSearchLocation: ''
  }
}

handleChange = event => {
  this.setState({[event.target.id]: event.target.value }); 
};
  
handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.hikeLocation);
  }

render (){
  return (
    <div>
      <Header />
      <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        hikeLocation={this.state.hikeLocation}
      />
      <SearchResults />
    </div>
  )
}

}

export default App;




/*
user types in location and hits enter/search

mapquest api takes input from searchbar and converts it to lat & long

that data get's stored in two variables

those variables are refrenced in a dynamic url that fetches the hiker project api

Images, Hike name, and difficulty render in the browser, mulitple pages, max 12 per page

User browses through images & click which hike they want to explore more

User is lead to url attached to that specific hike's data in the api

*/ 

import React, { Component }from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';
import SearchResults from './SearchResults';
import Footer from './Footer';
import Showhike from './Showhike';
import { results } from './placeholder-data';
import { Link, Switch, Route  } from "react-router-dom";

class App extends Component {
constructor(){
  super();
  this.state ={
    hikeLocation: '',
    setSearchLocation: '',
    mapQuestKey: process.env.REACT_APP_MAPQUEST_KEY,
    mapQuestAPI: 'https://www.mapquestapi.com/geocoding/v1/address?key=',
    lat:'',
    long: '',
    hikerProjectKey: process.env.REACT_APP_HIKER_PROJECT_KEY,
    hikerProjectAPI: 'https://www.hikingproject.com/data/get-trails?lat=',
    hikeResults: results,
    selectedHike: ''
  }
}

setHike = hike => {
  this.setState({selectedHike: hike})
  console.log(this.state.selectedHike);
}

resetPage = () => {
  this.setState({hikeResults: results});
}

handleChange = event => {
  this.setState({ [event.target.id]: event.target.value });
};

handleSubmit = event => {
  event.preventDefault();
  // console.log(this.state.hikeLocation);
  this.getCoordinates();
}

componentDidMount(){
  
  this.getCoordinates = () => {
    const mapQuestUrl = `${this.state.mapQuestAPI}${this.state.mapQuestKey}&inFormat=kvp&outFormat=json&location=${this.state.hikeLocation}&thumbMaps=false`;
  
  
    fetch(mapQuestUrl)
    .then(response => response.json())
    .then(response => {
      let lat = (response.results[0].locations[0].latLng.lat);
      let long = (response.results[0].locations[0].latLng.lng);
      this.setState({ lat: lat});
      this.setState({ long: long });
      // console.log(this.state.lat);
      // console.log(this.state.long);
      
      const hikerProjectUrl = `${this.state.hikerProjectAPI}${this.state.lat}&lon=${this.state.long}&key=${this.state.hikerProjectKey}`
  
      return fetch(hikerProjectUrl)
    })
    .then(response => response.json())
      .then(response => {
        this.setState({ hikeResults: response });
        // console.log(this.state.hikeResults);
      })
  }

}

render (){
  return (
    <>
      <Header />
      <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        hikeLocation={this.state.hikeLocation}
      />
      <Switch>
      <Route path="/" exact component={() => 
        <SearchResults results={this.state.hikeResults} setHike={this.setHike} />}/>
        <Route path="/:location/:hike" 
        render={routerProps => {
          console.log(routerProps);
          return (
            <Showhike
              hike={this.state.selectedHike}
              resetPage={this.resetPage}
            
            />
          );
        }} />
      </Switch>
      <Footer />
    </>
  );
} 

}

export default App;







{/* <Switch> */ }
{/* <Route
          exact
          path="/:name"
          render={routerProps => {
            console.log(routerProps);
            return (
              <Showhike
                hike={this.state.selectedHike}
                // routerHike={routerProps.match.params.name}
              />
            );
          }}
        /> */}
{/* </Switch> */ }


/*
user types in location and hits enter/search

mapquest api takes input from searchbar and converts it to lat & long

that data get's stored in two variables

those variables are refrenced in a dynamic url that fetches the hiker project api

Images, Hike name, and difficulty render in the browser, mulitple pages, max 12 per page

User browses through images & click which hike they want to explore more

User is lead to url attached to that specific hike's data in the api

*/ 




// https://www.mapquestapi.com/geocoding/v1/address?key=KEY&inFormat=kvp&outFormat=json&location=Marietta%2C+TN&thumbMaps=false
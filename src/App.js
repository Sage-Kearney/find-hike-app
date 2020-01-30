import React, { Component }from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Header from './Header';
import SearchResults from './SearchResults';
import Footer from './Footer';
import Showhike from './Showhike';
import { results } from './placeholder-data';
import { Switch, Route  } from "react-router-dom";

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
      
      const hikerProjectUrl = `${this.state.hikerProjectAPI}${this.state.lat}&lon=${this.state.long}&key=${this.state.hikerProjectKey}`
  
      return fetch(hikerProjectUrl)
    })
    .then(response => response.json())
      .then(response => {
        this.setState({ hikeResults: response });
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



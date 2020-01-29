import React from 'react';
import { Link } from "react-router-dom";


export default function SearchResults(props) {
    return (
      <div>
        <div className="results-container">
          {props.results.trails
            ? props.results.trails.map(hike => {
                return (
                  <div key={hike.name} className="results-content-container">
                    <Link
                      onClick={() => props.setHike(hike)}
                      to={'/' + hike.name}
                    >
                      <div
                        className="image-card"
                        style={{
                          backgroundImage: `url(${hike.imgMedium})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover'
                        }}
                      ></div>
                      <div className="content-card">
                        <h3>{hike.name}</h3>
                        <h5>{hike.location}</h5>
                        <p>Length: {hike.length} miles</p>
                      </div>
                    </Link>
                  </div>
                );
              })
            : props.results.map(hike => {
                return (
                  <div key={hike.name} className="results-content-container">
                    <div
                      className="image-card"
                      style={{
                        backgroundImage: `url(${hike.imgMedium})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                      }}
                    ></div>
                    <div className="content-card">
                      <h3>{hike.name}</h3>
                      <h5>{hike.location}</h5>
                      <p>Length: {hike.length} miles</p>
                    </div>
                  </div>
                );
              })}
        </div>
        </div>
    )
}


{/* class SearchResults extends React.Component {
    render(){
        console.log(this.props)
        return (
            <div className="results-container">
                {this.props.results.trails ?   
                this.props.results.trails.map(hike => {
                    return (
                      <div key={hike.name} className="results-content-container">
                        <Link
                          onClick={() => this.props.setHike(hike)}
                          to={'/' + hike.name}
                        >
                          <div
                            className="image-card"
                            style={{
                              backgroundImage: `url(${hike.imgMedium})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover'
                            }}
                          ></div>
                          <div className="content-card">
                            <h3>{hike.name}</h3>
                            <h5>{hike.location}</h5>
                            <p>Length: {hike.length} miles</p>
                          </div>
                        </Link>
                      </div>
                    );
                }) : this.props.results.map(hike => {
                    return (
                        <div key={hike.name} className="results-content-container">
                            <div className="image-card" style={{ backgroundImage: `url(${hike.imgMedium})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                            <div className="content-card">
                                <h3>{hike.name}</h3>
                                <h5>{hike.location}</h5>
                                <p>Length: {hike.length} miles</p>
                            </div>
                        </div>
                    )
                })
            } 
            </div>
        )
    }
    }

    export default SearchResults; */}


{/* <a href={hike.url}>
    <div className="image-card" style={{ backgroundImage: `url(${hike.imgMedium})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    </div>
    <div className="content-card">
        <h3>{hike.name}</h3>
        <h5>{hike.location}</h5>
        <p>Length: {hike.length} miles</p>
    </div>
</a> */}
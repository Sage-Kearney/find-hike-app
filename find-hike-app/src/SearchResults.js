import React from 'react'

export default function SearchResults(props) {
    console.log(props.results)

    return (
        <div className="results-container">
            {props.results.trails ?   
            props.results.trails.map(hike => {
                return (
                    <div key={hike.name} className="results-content-container" >
                        <a href={hike.url}>
                            <div className="image-card" style={{ backgroundImage: `url(${hike.imgMedium})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            </div>
                            <div className="content-card">
                            <h3>{hike.name}</h3>
                            <h5>{hike.location}</h5>
                            <p>Length: {hike.length} miles</p>
                            </div>
                        </a>
                    </div>
                )
            }) : props.results.map(hike => {
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



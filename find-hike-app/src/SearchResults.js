import React from 'react'

export default function SearchResults(props) {
    console.log(props.results)

    return (
        <div>
            {props.results.trails ?   
            props.results.trails.map(hike => {
                return (
                    <div key={hike.name}>
                        <a href={hike.url}>
                            <img src={hike.imgMedium} alt={hike.name}/>
                            <h3>{hike.name}</h3>
                            <h5>{hike.location}</h5>
                            <p>Length: {hike.length} miles</p>
                        </a>
                    </div>
                )
            }) : props.results.map(hike => {
                return (
                    <div key={hike.name}>
                            <img src={hike.imgMedium} alt={hike.name} />
                            <h3>{hike.name}</h3>
                            <h5>{hike.location}</h5>
                            <p>Length: {hike.length} miles</p>
                    </div>
                )
            })
        } 
        </div>
    )
}



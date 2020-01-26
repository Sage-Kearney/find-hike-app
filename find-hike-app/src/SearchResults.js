import React from 'react'

export default function SearchResults(props) {
    console.log(props.results)
    
    return (
        <div>
            <h1>This is SearchResults</h1>
            {props.results.map(hike => {
                return (
                    <p>{hike.name}</p>
                )
            })}
        </div>
    )
}



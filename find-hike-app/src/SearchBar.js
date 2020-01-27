import React from 'react'

function SearchBar(props) {
    return (
        <div>
            <form
            onSubmit={props.handleSubmit}>
                <input
                type="text"
                id="hikeLocation"
                placeholder="search for hikes by city here"
                value={props.hikeLocation}
                onChange={props.handleChange}
                className="searchBar"
                >   
                </input>
                {/* <button type="submit">search</button> */}
            </form>
        </div>
    )
}

export default SearchBar;

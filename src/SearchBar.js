import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <form
            onSubmit={props.handleSubmit}
            >
                <input
                type="text"
                id="hikeLocation"
                placeholder="search for hikes by city here"
                value={props.hikeLocation}
                onChange={props.handleChange}
                className="searchBar"
                >   
                </input>
            </form>
        </div>
    )
}

export default SearchBar;

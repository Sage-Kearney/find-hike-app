import React from 'react'

function SearchBar(props) {
    return (
        <div>
            <form
            onSubmit={props.handleSubmit}>
                <input
                type="text"
                id="hikeLocation"
                placeholder="enter city here"
                value={props.hikeLocation}
                onChange={props.handleChange}
                >   
                </input>
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default SearchBar;

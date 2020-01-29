import React from 'react';
import { Link } from 'react-router-dom';




export default function Showhike(props) {
    console.log(props)
    return (
        <div>
            <h2 className="showpageH1">Showhike page</h2>
            <Link to="/" onClick={props.restPage} >go back home</Link>
        </div>
    )
}
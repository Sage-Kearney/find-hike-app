import React from 'react';
import { Link } from 'react-router-dom';




export default function Showhike(props) {
    console.log(props)
    return (
        <div className="show-hike-container">
            <p className="back-home-btn"><Link to="/" onClick={props.restPage} >Back to search</Link></p>
            {props.hike.imgMedium ? <img src={props.hike.imgMedium} alt={props.hike.name}></img> :
                <img src="/placeholder.jpg" alt={props.hike.name} className="default-image"></img>}
            {/* <img src={props.hike.imgMedium} alt={props.hike.name}></img> */}
            <div className="hike-content">
                <h2 className="showpageH1">{props.hike.name}</h2>
                <p>{props.hike.summary}</p>
                <hr></hr>
                <div className="details-container">
                    <div>
                        <h4><span className="attribute">Length:</span> {props.hike.length}</h4>
                        <h4><span className="attribute">Difficulty:</span> {props.hike.difficulty}</h4>
                        <h4><span className="attribute">Community Rating:</span> {props.hike.stars}</h4>
                    </div>
                    <div>
                        <h4><span className="attribute">Location:</span> {props.hike.location}</h4>
                        <h4><span className="attribute">Total ascent:</span> {props.hike.ascent}</h4>
                        <h4><span className="attribute">Total descent:</span> {props.hike.descent}</h4>
                    </div>
                </div>
                <button><a href={props.hike.url} className="">More Information</a></button>
            </div>
        </div>
    )
}
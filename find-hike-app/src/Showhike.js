import React from 'react'

export default function Showhike(props) {
    console.log(props)
    return (
        <div>
            
        </div>
    )
}


/*
user searches hike, hikes in that area populate/render on the screen
user clicks on hike 
    - when user clicks on hike, selectedHike() is called & passed individual hike information. That information is stored in state under selectedHike & sent to Showhike page through props
    - when user clicks on hike, user is sent to Showhike page {"/" + hike.name} .... in app <Route path="/:name" render={ () => { return ( <Showhike hike={this.state.selectedHike}/>);}}
user is lead to Showhike page where information is displayed on page

*/ 

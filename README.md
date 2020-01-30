

![find-hike-app](https://media.git.generalassemb.ly/user/20934/files/03952100-4349-11ea-9950-0732af7ad331)

## Description
Built upon the belief that a life well lived is a life outside, Find-Hike App is designed for the outdoor enthusiast who wants to get out and hike somewhere, but isn’t too sure what is around the area. To help get you outside as quickly as possible, Find-Hike enables you to input your location, browse hikes in your area, and choose your hike in less than ten minutes. All the information you need is at your fingertips, you'll be out amongts the trees in no time!  

## BTS: Process of building the Find-Hike App
![Hnet-image (5)](https://user-images.githubusercontent.com/56275819/73471593-99d04380-4357-11ea-8696-e45b60f2ec54.gif)

### Wireframe
Home/Search display:
![wireframe-search](https://media.git.generalassemb.ly/user/20934/files/a8662d00-434e-11ea-96e8-2677135e6cdb)
Selected hike display:
![wireframe-show](https://media.git.generalassemb.ly/user/20934/files/aac88700-434e-11ea-88fc-6ea4dc1a9972)

### App Aesthetics
Inspired by REI and other outdoor companies, and taking my users into consideration, I chose to fill this app with warm earthy tones usually found in canyons tucked away in the southwest or mid west regions. The header font is casual, yet grabs your attention, while also providing a friendly, approachable feel. The body font is slim, minimal, and easy to read- similar to the overal design of the app.

![app-aesthetic](https://media.git.generalassemb.ly/user/20934/files/b4eb8500-4350-11ea-9a05-a8f464e98d94)

### How it works-using API's 
To get my app to work, I needed to use two API's. In order to retrieve the right information from the Hiker Project API (aka the hikes based on a certain location), I needed to find the longitude & lattitude for the location input by the user. So to do that, I used the Mapquest API to grab the user input, translate the location into lat & long, and then infuse that data into my fetch call to the Hiker Project API. Having all of the right information in the right places is what enabled me to render the data on the page, providing a seamless user experience. 

### Technologies Used
- React
-  JSX-CSS
- Hiking Project API https://www.hikingproject.com/
- Mapquest API https://www.mapquest.com/
- Heroku

### Getting Started/Installation Instructions
Please follow the link to use Find-Hike App https://find-hike.herokuapp.com/

### Contribution Guidelines
Simply fork & clone this repo into your local directory if you wish to contribute to this project.

## Learn More about the developer
Visit my portfolio site here https://sage-kearney.github.io/
Connect with me on LinkedIn https://www.linkedin.com/in/sage-kearney/

## Special thanks to..
- Jerrica Bobadilla, for helping me with my map function & deploying to Heroku & encouraging me throughout the project
- Qusai Fares, for helping me get my links/routes working
- Rixio Barrios, for giving me feedback & encouragment, & telling me about changing my project title 
- Daphne Mintz & Daisy Yau for trying to help me figure out what was wrong with my Heroku


## REACT
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


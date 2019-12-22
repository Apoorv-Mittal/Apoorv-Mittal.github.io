import React from "react";

const Projects = () =>
    <div className="Article" >
        <div className="pb-2 mt-4 mb-2 border-bottom">
            <h2>Projects</h2>
        </div>

        <div className="pb-2 mt-4 mb-2 border-bottom">
            <h3>Open Source Contributions</h3>
        </div>

        <h3>
            <a href = 'https://github.com/facebook/react'>
            facebook/React
            </a>
        </h3>
        <p>Contributed to the documentation for Facebook’s React.js and added explanations for passing props in the ‘Intro to React’ page. The PR can be found <a href='https://github.com/facebook/react/pull/10190'>here</a>.</p>

        <div style={{borderBottom: '1px solid #eee', width: '80%', margin: '40px 0 20px 0'}}/>

        <h3>
            <a href = 'https://github.com/philipp-spiess/this-week-in-react'>
            this-week-in-react
            </a>
        </h3>
        <p>Converted Philipp Spiess, React.js DOM contributors, newsletter website from static to dynamic. It now is build into static bundles using React-Static</p>

        <div className="pb-2 mt-4 mb-2 border-bottom">
            <h3>Personal Projects</h3>
        </div>

        <h3>
            <a href = 'http://taapp.cs.umd.edu'>
            CS Department TA Application
            </a>
        </h3>

        <p>
        Created and proposed a full stack web application for potential TA to apply which got accepted by the CS Department. Currently under active development. This project uses various technologies like JavaScript, its libraries in the frontend and PHP and MySQL in the backend. 
        </p>

        <div style={{borderBottom: '1px solid #eee', width: '80%', margin: '40px 0 20px 0'}}/>

        <h3>
            <a href = 'https://github.com/Apoorv-Mittal/Predicting-Taxi-Fare'>
            Predicting Taxi Fare
            </a>
        </h3>

        <p>
        This is a Data Science project in which I make models to predict the fare amount of taking a Yellow Taxi in NYC. The model uses variables such as the pickup location (latitude and longitude), dropoff location, number of passengers, time of the day and the week of the day. I also add some features which are extracted from our data itself. In the end I analysed which features were considered the best.
            
        </p>

        <div style={{borderBottom: '1px solid #eee', width: '80%', margin: '40px 0 20px 0'}}/>

        <h3>
            <a href = 'http://tsan.umd.edu/'>
            TSAN.UMD.EDU
            </a>
        </h3>

        <p>
        Created tsan.umd.edu for the Telecommunication program of UMD. Proposed it to the Student President for TSAN, who accepted and is currently deployed. This project is made in the Content Management System called, Blogger.
        </p>

        <div style={{borderBottom: '1px solid #eee', width: '80%', margin: '40px 0 20px 0'}}/>

        <h3>
            <a href = 'https://github.com/Apoorv-Mittal/Chatty-Online-Messaging-App-'>
            Chatty Messaging App
            </a>
        </h3>

        <p>
        Used JavaScript, and Socket.io to make an online messaging app, which uses Node.js to on the server side and uses socket.io as web socket providing lightweight bidirectional real-time communication
        </p>

        <div style={{borderBottom: '1px solid #eee', width: '80%', margin: '40px 0 20px 0'}}/>

        <h3>
            <a href = 'https://github.com/Apoorv-Mittal/Meteor-Landing-Page'>
            Meteor-Landing-Page
            </a>
        </h3>

        <p>
        The page is made by HTML, CSS and JavaScript with the visualization done by using D3.js and D3's queue. The page takes data from the NASA's website (as a JSON) file and maps it on the world map. The real challenge was to make a world by th use of a JSON file and then plotting the landings by using another JSON file. The queue allowed to read 2 JSON files at once and draw the map of the world and map the points on it simultaneously.
        </p>
        

    </div>;

export default Projects;
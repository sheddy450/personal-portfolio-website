import React from 'react';
import image from './image/restaurrant.jpg';
import secondImage from './image/blog.jpg';
import thirdImage from './image/taskApp.jpg';
import timer from './image/time.jpg'
import todo from './image/Todo.jpg'
import weather from './image/weather.jpg'


const Portfolio = () => {
    return ( 
        <div className='portfolio'>
            <h1>My portfolio</h1>
            <div className='portfolio-content'>
                <div className='blog'>
                    <h2>Restaurant website</h2>
                    <p className='portText'>Welcome to our restaurant website! Here at our restaurant, we
                        pride ourselves on serving delicious food and providing exceptional service to our customers. Our website is designed to 
                    give you a taste of what we have to offer.</p>
                    <a href="https://dineoutrestaurant001.netlify.app/">   <img className='img' src={image} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Blog website</h2>
                    <p className='portText'>Welcome to my blog, on this blog,  you can add new blog and delete existing blogs but since the json file is
                     hosted on a local server, you cannot do that from your local system. it also shows a contact section where you can contact me on socials</p>
                    <a href="https://preeminent-daffodil-86105a.netlify.app/">   <img className='img' src={secondImage} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Landing page</h2>
                    <p className='portText'>Welcome to my landing page, this is a random landing page that shows the a map of a community in ebonyi state where i 
                    did my national youth service scheme.
                    This is one of the pages i made from playing around with Html, CSS and JavaScript</p>
                    <a href="https://preeminent-daffodil-86105a.netlify.app/">   <img className='img' src={thirdImage} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Contdown Timer</h2>
                    <p className='portText'>Welcome to my giveaway page this simple page shows the countdown time for my giveaway to close. This is a 
                     cool page which displays a written note at 
                    the end of the giveaway. I made playing around with Html, CSS and JavaScript</p>
                    <a href="https://rainbow-conkies-91167f.netlify.app/">   <img className='img' src={timer} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>To-do app</h2>
                    <p className='portText'>Welcome to my To-do app, this is an app that help you set all your daily activities witout leaving a single thing
                     out . you can add items, edit items and clear all items. your lists will still be on the browser even after closing</p>
                    <a href="https://grand-pony-a01842.netlify.app/">   <img className='img' src={todo} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Weather app</h2>
                    <p className='portText'>Welcome to my weather app, this weather app was built with Html, CSS and Vanilla JavaScript. It shows you the weather condition of any city inputed in the search box. The temperature,<br/> Humidity and wind speed are the weather conditions displayed </p>
                    <a href="https://sheddyweatherapp.netlify.app/">   <img className='img' src={weather} alt='display'/></a>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;
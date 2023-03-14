import React from 'react';
import image from './image/restaurrant.jpg';
import secondImage from './image/blog.jpg';
import thirdImage from './image/taskApp.jpg';


const Portfolio = () => {
    return ( 
        <div className='portfolio'>
            <h1>My portfolio</h1>
            <div className='background-Image'>
                <div className='blog'>
                    <h2>Restaurant website</h2>
                    <p>Welcome to our restaurant website! Here at our restaurant,<br/> we
                        pride ourselves on serving delicious food and providing <br/>exceptional service to our customers. Our website is designed <br/>to 
                    give you a taste of what we have to offer.</p>
                    <a href="https://melodious-madeleine-4daaf2.netlify.app/">   <img className='img' src={image} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Blog website</h2>
                    <p>Welcome to my blog, on this blog,  you can add new blog <br/>and delete existing blogs but since the json file is
                     hosted <br/>on a local server, you cannot do that from your local system.<br/> it also shows a contact section where you can contact me on socials</p>
                    <a href="https://preeminent-daffodil-86105a.netlify.app/">   <img className='img' src={secondImage} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Landing page</h2>
                    <p>Welcome to my landing page, this is a random landing page<br/> that shows the a map of a community in ebonyi state where i <br/>
                    did my national youth service scheme.
                    This is one of the pages<br/> i made from playing around with Html, CSS and JavaScript</p>
                    <a href="https://preeminent-daffodil-86105a.netlify.app/">   <img className='img' src={thirdImage} alt='display'/></a>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;
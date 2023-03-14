import React from 'react';
import image from './image/sheddy.jpg';

const About = () => {
    return ( 
        <div className="about">
            <h1>About</h1>
            <article>
                <div className='myImg'>
                    <img className='sheddy' src={image} alt='display'/>
                </div>
            
                <div className='text'>
                   <div className='content'>
                   <p>I'm a skilled front-end developer and technical writer with a passion for creating elegant and intuitive user interfaces. With several years of experience in the industry, I have developed expertise in HTML, CSS, JavaScript, and various front-end frameworks such as React and Bootstrap.
                    I am also a technical writer, with a knack for communicating different concepts in clear and concise language. I have created technical documentation for a variety of projects, ranging from user manuals and tutorials to developer guides and API documentation.
                    When I'm not coding or writing, i enjoy keeping up with the latest trends in web development and technology, and always looking for new tools and techniques to improve my skills.
                    I'm a team player who enjoys collaborating with other developers, designers, and writers to create exceptional products that meet the needs of both clients and end-users.</p>
                   </div>
                </div>
            </article>
        </div>
     );
}
 
export default About;
import React from 'react';
import image from './image/restaurrant.jpg';
import secondImage from './image/blog.jpg';
import thirdImage from './image/taskApp.jpg';
import man from './image/front.jpg';
import todo from './image/Todo.jpg'
import weather from './image/weather.jpg'
import ecommerce from './image/ecommerce.jpg'
import {SiJavascript, SiTailwindcss} from 'react-icons/si'
import {DiCss3} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'


const Portfolio = () => {
    return ( 
        <div className='portfolio pt-10 dark:bg-gray-900 dark:text-white'>
            <h1 className='text-gray-600 dark:text-white'>My portfolio</h1>
            <div className='portfolio-content gap-4 space-y-2 mt-5 grid xl:grid-cols-3 lg:grid-cols-2'>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://dineoutrestaurant001.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={image} alt='display'/></a>
                    <h2 className='text-center'>Restaurant Landing Page</h2>
                    <p className='max-w-sm p-2'>Welcome to our restaurant website! Here at our restaurant, we
                        pride ourselves on serving delicious food and providing exceptional service to our customers. Our website is designed to 
                    give you a taste of what we have to offer.</p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <AiFillHtml5 className='text-6xl text-green-500'/>
                        <p className='text-2xl'>Html5</p>
                        </div>
                        <div>
                        <DiCss3 className='text-6xl text-red-600'/>
                        <p className='text-2xl'>CSS3</p>
                        </div>
                        <div>
                        <SiJavascript className='text-6xl text-yellow-500'/>
                        <p className='text-2xl'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://dineoutrestaurant001.netlify.app/"><img style={{width: '27em'}} className='img mx-auto' src={man} alt='display'/></a>
                    <h2 className='text-center'>Men boutique Landing Page</h2>
                    <p className='max-w-sm p-2'>Discover a world of style with our exclusive men's boutique, where sophistication meets modern trends. This was built with Next.js and tailwund CSS</p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <TbBrandNextjs className='text-6xl text-black'/>
                        <p className='text-2xl'>Next.js</p>
                        </div>
                        <div>
                        <SiTailwindcss className='text-6xl text-blue-600'/>
                        <p className='text-2xl'>Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://sheddyfurniture.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={ecommerce} alt='display'/></a>
                    <h2 className='text-center max-w-sm'>e-commerce Landing Page</h2>
                    <p className='max-w-sm p-2'>Welcome to my e-commerce landing page. This page was built with Next.js and Tailwind CSS.
                    It displays a wide range of furnitures for home and office use. you can also contact me </p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <TbBrandNextjs className='text-6xl text-black'/>
                        <p className='text-2xl'>Next.js</p>
                        </div>
                        <div>
                        <SiTailwindcss className='text-6xl text-blue-600'/>
                        <p className='text-2xl'>Tailwind CSS</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://preeminent-daffodil-86105a.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={secondImage} alt='display'/></a>
                    <h2 className='text-center'>Blog website</h2>
                    <p className='max-w-sm p-2'>Welcome to my blog, on this blog,  you can add new blog and delete existing blogs but since the json file is
                     hosted on a local server, you cannot do that from your local system. it also shows a contact section where you can contact me</p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <FaReact className='text-6xl text-blue-500'/>
                        <p className='text-2xl'>React</p>
                        </div>
                        <div>
                        <DiCss3 className='text-6xl text-red-600'/>
                        <p className='text-2xl'>CSS3</p>
                        </div>

                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://preeminent-daffodil-86105a.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={secondImage} alt='display'/></a>
                    <h2 className='text-center'>Landing page</h2>
                    <p className='max-w-sm p-2'>Welcome to my landing page, this is a random landing page that shows the a map of a community in ebonyi state where i 
                    did my national youth service scheme.
                    This is one of the pages i made from with Html, CSS and JavaScript</p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <AiFillHtml5 className='text-6xl text-green-500'/>
                        <p className='text-2xl'>Html5</p>
                        </div>
                        <div>
                        <DiCss3 className='text-6xl text-red-600'/>
                        <p className='text-2xl'>CSS3</p>
                        </div>
                        <div>
                        <SiJavascript className='text-6xl text-yellow-500'/>
                        <p className='text-2xl'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://rainbow-conkies-91167f.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={thirdImage} alt='display'/></a>
                    <h2 className='text-center'>Contdown Timer</h2>
                    <p className='max-w-sm p-2'>Welcome to my giveaway page this simple page shows the countdown time for my giveaway to close. This is a 
                     cool page which displays a written note at 
                    the end of the giveaway. I made playing around with Html, CSS and JavaScript</p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <AiFillHtml5 className='text-6xl text-green-500'/>
                        <p className='text-2xl'>Html5</p>
                        </div>
                        <div>
                        <DiCss3 className='text-6xl text-red-600'/>
                        <p className='text-2xl'>CSS3</p>
                        </div>
                        <div>
                        <SiJavascript className='text-6xl text-yellow-500'/>
                        <p className='text-2xl'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://grand-pony-a01842.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={todo} alt='display'/></a>
                    <h2 className='text-center'>To-do app</h2>
                    <p className='max-w-sm p-2'>Welcome to my To-do app, this is an app that help you set all your daily activities witout leaving a single thing
                     out . you can add items, edit items and clear all items. your lists will still be on the browser even after closing the broswer</p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <AiFillHtml5 className='text-6xl text-green-500'/>
                        <p className='text-2xl'>Html5</p>
                        </div>
                        <div>
                        <DiCss3 className='text-6xl text-red-600'/>
                        <p className='text-2xl'>CSS3</p>
                        </div>
                        <div>
                        <SiJavascript className='text-6xl text-yellow-500'/>
                        <p className='text-2xl'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div style={{height: '55em'}} className='w-[22em] grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://sheddyweatherapp.netlify.app/"><img style={{width: '25em'}} className='img mx-auto' src={weather} alt='display'/></a>
                    <h2 className='text-center'>Weather app</h2>
                    <p className='max-w-sm p-2'>Welcome to my weather app, this weather app was built with Html, CSS and Vanilla JavaScript. It shows you the weather condition of any city inputed in the search box. The temperature,<br/> Humidity and wind speed are the weather conditions displayed </p>
                    <p className='text-center text-2xl'> Tech Stack used</p>
                    <div className='flex justify-evenly'>
                        <div>
                        <AiFillHtml5 className='text-6xl text-green-500'/>
                        <p className='text-2xl'>Html5</p>
                        </div>
                        <div>
                        <DiCss3 className='text-6xl text-red-600'/>
                        <p className='text-2xl'>CSS3</p>
                        </div>
                        <div>
                        <SiJavascript className='text-6xl text-yellow-500'/>
                        <p className='text-2xl'>JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;
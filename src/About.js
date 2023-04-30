import React from 'react';
import image from './image/sheddy.jpg';
import {SiTailwindcss, SiJavascript} from 'react-icons/si'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {DiCss3} from 'react-icons/di'
import {AiFillHtml5} from 'react-icons/ai'

const About = () => {
    return ( 
        <div  className="about h-[100%] md:h-[170vh] dark:bg-gray-900 dark:text-white">
            <h1 className='text-gray-600 pt-10 dark:text-white'>About</h1>
            <article className='lg:flex grid grid-cols-4items-center justify-center mx-auto mt-10'>
                   <div className='content mx-auto'>
                   <p className='max-w-2xl mx-auto text-2xl'>I'm a skilled front-end developer and technical writer with a passion for creating elegant and intuitive user interfaces. With several years of experience in the industry, I have developed expertise in HTML, CSS, JavaScript, and various front-end frameworks such as React and Bootstrap.
                    I am also a technical writer, with a knack for communicating different concepts in clear and concise language. I have created technical documentation for a variety of projects, ranging from user manuals and tutorials to developer guides and API documentation.
                    When I'm not coding or writing, i enjoy keeping up with the latest trends in web development and technology, and always looking for new tools and techniques to improve my skills.
                    I'm a team player who enjoys collaborating with other developers, designers, and writers to create exceptional products that meet the needs of both clients and end-users.</p>
                   </div>
                <div className='myImg mx-auto'>
                    <img style={{width:'30em', height: '30em'}} className='sheddy rounded-full' src={image} alt='display'/>
                </div>
            </article>
            <h1 className='text-gray-400 font-bold mb-5'>Tech Stack</h1>
            <div  className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-4 justify-evenly'>
                <div style={{width: '15em'}} className='inline-block mx-auto shadow-lg p-2'>
                <AiFillHtml5 className='text-6xl text-red-400'/>
                <p className='font-bold'>Html5</p>
                <p className='-mt-3'>years of experience: 2years</p>
    
                </div>
               <div style={{width: '15em'}} className='shadow-lg mx-auto inline-block p-2'>
               <DiCss3 className='text-6xl text-green-400'/>
               <p className='font-bold'>CSS3</p>
                <p className='-mt-3'>years of experience: 2years</p>
               </div>
                <div style={{width: '15em'}} className='shadow-lg mx-auto inline-block p-2'>
                <SiJavascript className='text-6xl text-yellow-400'/>
                <p className='font-bold'>JavaScript</p>
                <p className='-mt-3'>years of experience: 1+ years</p>
                </div>
                <div style={{width: '15em'}} className='shadow-lg mx-auto inline-block p-2'>
                <FaReact className='text-6xl text-blue-500'/>
                <p className='font-bold'>React</p>
                <p className='-mt-3'>years of experience: 6 months</p>
                </div>
                <div style={{width: '15em'}} className='shadow-lg mx-auto inline-block p-2'>
                <TbBrandNextjs className='text-6xl text-blue-950'/>
                <p className='font-bold'>Next.js</p>
                <p className='-mt-3'>years of experience: 4 months</p>
                </div>
                <div style={{width: '15em'}} className='shadow-lg mx-auto inline-block p-2'>
                <SiTailwindcss className='text-6xl text-blue-500'/>
                <p className='font-bold'>Tailwind CSS</p>
                <p className='-mt-3'>years of experience: 6 months</p>
                </div>
            </div>
        </div>
     );
}
 
export default About;
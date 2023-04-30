import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faBars, faCode, faTimes} from '@fortawesome/free-solid-svg-icons'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import resume from './Resume/myCv.pdf'
import {HiDownload} from 'react-icons/hi'
const Navbar = () => {

const [navBar, setNavBar] = useState(false)
const [darkMode, setDarkMode] = useState(false)

useEffect(()=> {
    if(darkMode ==='dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
}, [darkMode]);

const handleDarkmode = ()=>{
    setDarkMode(darkMode==='dark'? 'light': 'dark');
}

    return ( 
        <div >
            <header style={{height: '70px'}} className='flex justify-between items-start dark:bg-gray-800'>
            <div className = 'logo'>
                    <FontAwesomeIcon className='text-gray-600 text-2xl md:px-2 dark:text-white' icon={faCode} />
                <Link className='text-gray-600 font-bold hover:text-red-400 dark:text-white' to='/'>SheddyTech</Link>
            </div>
          {
            navBar?(
                <div  className='grid lg:hidden absolute right-0 bg-gray-700 text-white text-2xl p-10 px-20 space-y-5' onClick={()=> setNavBar(!navBar)} >
                    <button className='nav-btn nav-close-btn text-white absolute right-0 px-4 pt-2' onClick={()=> setNavBar(!navBar)}> <FontAwesomeIcon icon={faTimes} /></button>
                    <Link style={{textDecoration: 'none'}} className='mr-5 pr-14 pt-14 text-white hover:text-red-400' id='home' to="/">Home</Link>
                    <Link  style={{textDecoration: 'none'}}  className='mr-5 pr-14 pt-14 text-white hover:text-red-400' to="/about">About</Link>
                    <Link  style={{textDecoration: 'none'}}  className='mr-5 pr-14 pt-14 text-white hover:text-red-400' to="/services">Services</Link>
                    <Link  style={{textDecoration: 'none'}}  className='mr-5 pr-14 pt-14 text-white hover:text-red-400' to="/portfolio">Portfolio</Link>
                    <Link  style={{textDecoration: 'none'}}  className='mr-5 pr-14 pt-14 text-white hover:text-red-400' to="/contact">Contact</Link>
                    <button onClick={handleDarkmode}><BsFillMoonStarsFill/></button>
                </div>
            ):(
                <div className='mt-2 font-bold hidden lg:flex items-center space-x-10 mx-auto lg:text-2xl xl:text-3xl' > 
                    <Link  style={{textDecoration:'none'}}className=' text-gray-600 hover:text-red-400 dark:text-white' to="/">Home</Link>
                <Link style={{textDecoration:'none'}} className='text-gray-600 hover:text-red-400 dark:text-white' to="/about">About</Link>
                <Link style={{textDecoration:'none'}} className='text-gray-600 hover:text-red-400 dark:text-white' to="/services">Services</Link>
                <Link style={{textDecoration:'none'}} className='text-gray-600 hover:text-red-400 dark:text-white' to="/portfolio">Portfolio</Link>
                <Link style={{textDecoration:'none'}} className='text-gray-600 hover:text-red-400 dark:text-white' to="/contact">Contact</Link>
                <button className='nav-btn nav-close-btn hidden text-gray-600' onClick={()=> setNavBar(!navBar)}> <FontAwesomeIcon icon={faTimes} /></button>
                     <a href={resume} download='resume' className='xl:flex items-center hidden text-white border-white text-sm border-2  py-2 px-2 rounded-sm bg-red-400 shadow-lg' style={{textDecoration:'none'}}>Download resume
                     <HiDownload/>
                     </a>
                     <button className='dark:text-white' onClick={handleDarkmode}><BsFillMoonStarsFill/></button>
                </div>
            )
          }  
           
         <button className='nav-btn nav-open-btn dark:text-white text-gray-600 lg:hidden' onClick={()=> setNavBar(!navBar)}> <FontAwesomeIcon icon={faBars} /></button>
        </header>
        </div>
     );
}
 
export default Navbar;
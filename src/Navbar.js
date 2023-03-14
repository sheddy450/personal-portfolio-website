import { useRef } from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {faBars, faCode, faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle('responsive_nav');
    }

    return ( 
        <header>
            <div className = 'logo'>
            <a href="https://hashnode.com/@Shedranifico">
                    <FontAwesomeIcon icon={faCode} />
                </a>
                <Link to='/'>SheddyTech</Link>
            </div>
           <nav onClick={()=> showNavbar(false)} ref={navRef}>
            
            <Link id='/' to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <button className='nav-btn nav-close-btn' onClick={showNavbar(false)}> <FontAwesomeIcon icon={faTimes} /></button>
         </nav>
         <button className='nav-btn nav-open-btn' onClick={showNavbar}> <FontAwesomeIcon icon={faBars} /></button>
        </header>
     );
}
 
export default Navbar;
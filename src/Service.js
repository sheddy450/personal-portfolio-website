import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faPencil} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Service = () => {
    return ( 
        <div className='service h-[400vh]  md:h-[300vh] xl:h-[170vh] dark:bg-gray-900 dark:text:white '>
            <h1 className='text-gray-600 font-bold dark:text-white pt-5'>Services Rendered</h1>
                    <a className=' dark:text-white gitHub text-gray-600 hover:text-red-400 font-bold' href="https://github.com/sheddy450?tab=repositories">
                             <FontAwesomeIcon icon={faGithub} />
                                <p>Frontend development</p>
                            </a>
                            <p className='dark:text-white'>As a Frontend Developer, I create and maintain user-friendly websites and applications that provides optimal user experience. I have collaborated with designers and developers to ensure that the website or application is visually appealing, functional, and meets the needs of the target audience.<br/>
                    Key Responsibilities:
                    </p>
                    <ul className='dark:text-white'>
                        <li>1. Develop and maintain responsive, user-friendly websites and applications using HTML, CSS, JavaScript, and other frontend technologies such as React, Next.js and tailwind CSS.</li>
                        <li>2. Collaborate with designers to ensure that the website or application is visually appealing and meets the design requirements.</li>
                        <li>3. Ensure that the website or application is optimized for performance, speed, and accessibility.</li>
                        <li>4. Implement best practices for SEO and ensure that the website or application is easily discoverable by search engines.</li>
                        <li>5. Work with other developers and team members to ensure that the website or application is integrated with backend systems and services.</li>
                        <li>6. Conduct testing and debugging of the website or application to ensure that it is functioning as expected.</li>
                        <li>7. Stay up-to-date with the latest frontend technologies, best practices, and trends.</li>
                    </ul>	
                         <a className='gitHub dark:text-white text-gray-600 hover:text-red-400 font-bold' href="https://hashnode.com/@Shedranifico">
                            <FontAwesomeIcon icon={faPencil} />
                            <p className='dark:text-white'>Technical writing</p>
                        </a>
                        <p className='dark:text-white '>As a technical writer, these are some of the service i render</p>
                        <ul className='dark:text-white'>
                            <li>1. Documentation creation and management</li>
                            <li>2. Developing user manuals, technical guides, online help systems, and other types of technical documentation.</li>
                            <li>3. Managing the documentation process, including version control, updating existing documents, and archiving.</li>
                            <li>4. Technical editing and proofreading</li>
                            <li>5. Reviewing technical content for accuracy, consistency, and readability.</li>
                            <li>6. Ensuring that the content adheres to style and formatting guidelines.</li>
                            <li>7. Project management</li>
                            <li>8. Managing technical writing projects from start to finish, including scoping, planning, and executing</li>
                        </ul>
        </div>
     );
}
 
export default Service;
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faPencil} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Service = () => {
    return ( 
        <div className='service'>
            <h1>Services Rendered</h1>

                    <Container>
                    <a className='gitHub' href="https://github.com/sheddy450?tab=repositories">
                                <FontAwesomeIcon icon={faGithub} />
                                <p>Frontend development</p>
                            </a>
                            <p>As a Frontend Developer, I create and maintain user-friendly websites and applications that provides optimal user experience. I have collaborated with designers and developers to ensure that the website or application is visually appealing, functional, and meets the needs of the target audience.<br/>
                    Key Responsibilities:
                    <ul>
                        <li>Develop and maintain responsive, user-friendly websites and applications using HTML, CSS, JavaScript, and other frontend technologies such as React, bootstrap and tailwind CSS.</li>
                        <li>Collaborate with designers to ensure that the website or application is visually appealing and meets the design requirements.</li>
                        <li>Ensure that the website or application is optimized for performance, speed, and accessibility.</li>
                        <li>Implement best practices for SEO and ensure that the website or application is easily discoverable by search engines.</li>
                        <li>Work with other developers and team members to ensure that the website or application is integrated with backend systems and services.</li>
                        <li>Conduct testing and debugging of the website or application to ensure that it is functioning as expected.</li>
                        <li>Stay up-to-date with the latest frontend technologies, best practices, and trends.</li>
                    </ul>	
                    </p>
                         <a className='gitHub' href="https://hashnode.com/@Shedranifico">
                            <FontAwesomeIcon icon={faPencil} />
                            <p>Technical writing</p>
                        </a>
                        <p>As a technical writer, these are some of the service i render</p>
                        <ul>
                            <li>Documentation creation and management</li>
                            <li>Developing user manuals, technical guides, online help systems, and other types of technical documentation.</li>
                            <li>Managing the documentation process, including version control, updating existing documents, and archiving.</li>
                            <li>Technical editing and proofreading</li>
                            <li>Reviewing technical content for accuracy, consistency, and readability.</li>
                            <li>Ensuring that the content adheres to style and formatting guidelines.</li>
                            <li>Project management</li>
                            <li>Managing technical writing projects from start to finish, including scoping, planning, and executing</li>
                        </ul>
           </Container>
        </div>
     );
}
 
export default Service;
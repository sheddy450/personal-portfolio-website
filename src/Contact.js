import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,  faLinkedin, faTwitter,  } from "@fortawesome/free-brands-svg-icons"
import '@fortawesome/fontawesome-svg-core/styles.css';
import {AiFillPhone} from 'react-icons/ai'


const Contact = () => {
    return ( 
       <div style={{height: '100vh'}} className=' dark:bg-gray-900 dark:text-white pt-20 grid gap-5 xl:grid-cols-2 items-baseline justify-around'>
        <div className="all-contacts">
            <div className='contact'>
                <h2 className='text-gray-400 font-bold'>Contact</h2>
                <p className='max-w-xl mx-auto'>You can check out some of my articles published on hashnode. you can aswell contact me
                  via any of the platform below. Just click on any of the link and you'd connect with me.
                </p>
            </div>
           <Container>
            <div className="contact-list justify-center space-x-10 flex">
                <a className= 'flex gap-1' href="https://www.linkedin.com/in/shedrach-musa-a6b182231">
                    <FontAwesomeIcon className='bg-gray-500 text-white p-2 rounded-full' icon={faLinkedin} />
                    <p className='text-gray-400 font-bold'>Linkedin</p>
                </a>
            
                <a className='flex gap-1' href="https://twitter.com/kungfu_sheddy?t=J4_If_1O7myF67cCSiTDPQ&s=09">
                    <FontAwesomeIcon className='bg-gray-500 text-white p-2 rounded-full' icon={faTwitter} />
                    <p className='text-gray-400 font-bold'>Twitter</p>
                </a>
                <a className='flex gap-1' href="https://github.com/sheddy450?tab=repositories">
                    <FontAwesomeIcon className='bg-gray-500 text-white p-2 rounded-full' icon={faGithub} />
                    <p className='text-gray-400 font-bold'>Github</p>
                </a>
                <a className='flex gap-1' href="#">
                    <button style={{width:'2em', height:'2em'}} className='bg-gray-500 text-center flex justify-center items-center text-white p-2 rounded-full'><AiFillPhone /></button>
                   <div className='grid text-start'>
                   <p className='text-gray-400 font-bold'>Telephone</p>
                    <p className='-mt-4 text-gray-400 font-bold'>+2349157795092</p>
                   </div>
                </a>
            </div>
           </Container>
      </div>
      <div>
      <h1 className='text-2xl text-gray-400 font-bold'>Drop a comment, Send me an Email</h1>
      <form className='grid gap-2 justify-start' action="https://formsubmit.co/shedrachmusa420@gmail.com" method="POST">
          <div className='flex gap-2'>
          <input style={{ width: '20em'}} className='border-2 p-2 mx-auto dark:text-black' type="text" name='name' placeholder='Name' required />
          <input style={{ width: '20em'}} className='border-2 p-2 mx-auto dark:text-black' type="email" name='email' placeholder='Email' required/>
          </div>
          <textarea style={{height: '200px', width: '41em'}} type='message' className='dark:text-black mx-auto border-2 p-2' placeholder='Message' required/>
          <button type='submit' className='bg-gray-500   text-white justify-start inline-block text-start w-fit px-3 rounded-lg py-1 text-xl font-bold hover:text-white hover:bg-red-400'>submit</button>
      </form>
      </div>
       </div>
     );
}
 
export default Contact;
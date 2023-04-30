import { Link } from "react-router-dom";
import resume from './Resume/myCv.pdf'
import person from './image/244.png'
// import Lottie from 'lottie-react' 




const Home = () => {

    return ( 
     <div className='dark:bg-gray-900 text-center pt-10'  style={{height: '100vh'}}>
        <div className=" lg:flex justify-evenly items-center mx-auto px-2">
          <div className="mt-10 hidden lg:flex justify-center ">
            <img src={person} width={300} height={100} style={{height: '40em', width: '25em'}}/>
          </div>
          <div>
                <h1 className='text-red-300'>Meet Shedrach</h1>
                <h2 className="max-w-4xl text-start text-gray-600 dark:text-white">An Amazing frontend developer and technical writer with a passion 
                    for creating elegant and intuitive User Interfaces with a knack for 
                    communicating different concepts in clear and concise language</h2>
                    <div className="resume xl:hidden">
                      <a href={resume} download='resume' className=' text-gray-600 dark:text-white dark:border-white hover:text-white hover:border-red-400 border-2 border-gray-700 px-10 py-3 rounded-sm hover:bg-red-400 shadow-lg'>Download resume</a>
                     </div>
        </div>
       </div>
       <div>
         <footer >
            <Link className=" text-4xl rounded-full py-3 bg-red-400 text-white"  to='reviews'>Technical Reviews</Link>
        </footer>
       </div>
     </div>
     );
}
 
export default Home;
import { Link } from "react-router-dom";
import resume from './Resume/myCv.pdf'

const Home = () => {
    return ( 
       <div>
         <section>
                <h1>Meet Shedrach</h1>
                <h2>An Amazing frontend developer and technical writer with a passion 
                    for creating elegant and intuitive UserInterfaces with a knack for 
                    communicating different concepts in clear and concise language</h2>
                    <div className="resume">
        <a href={resume} download='resume'>Download resume</a>
                     </div>
        </section>
        <footer>
            <Link  to='reviews'>Technical Reviews</Link>
            <Link  to='Contact'>Contact</Link>
        </footer>
       </div>
     );
}
 
export default Home;
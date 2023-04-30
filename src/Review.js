import React from 'react';
import cssBook from './image/cssBook.jpg'
import jsBook from './image/jsBook.jpg'
import Array from './image/array.jpg'

const Review = () => {
    return ( 
        <div className="portfolio dark:bg-gray-900 dark:text-white pt-10 h-[100%] lg:h-[100vh]" >
            <h1 className='text-gray-400 font-bold dark:text-white'>Technical Articles</h1>
            <div className='portfolio-content grid gap-3 lg:grid-cols-3 mt-5'>
            <div className='grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://medium.com/@shedrachmusa420/css-flexbox-documentation-377336c6f3ac"><img style={{width: '25em'}} className='img mx-auto' src={cssBook} alt='display'/></a>
                    <h2 className='text-center max-w-sm'>Documentation on CSS flexbox</h2>
                    <p className='max-w-sm p-2'>This is an article on how to use the flexbox display property. 
                    click on the image to read this beautiful piece published on hashnode</p>
             </div>
            <div className='grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://medium.com/@shedrachmusa420/advanced-javascript-concepts-simplified-771bcf8402a5"><img style={{width: '25em'}} className='img mx-auto' src={jsBook} alt='display'/></a>
                    <h2 className='text-center max-w-sm'>Advanced JavaScript concept simplified</h2>
                    <p className='max-w-sm p-2'>JavaScript concepts can be simplified and understood by all developers.This article provides a simple explanation of JavaScript</p>
             </div>
            <div className='grid mx-auto shadow-lg rounded-lg'>
                 <a className='hover:relative hover:opacity-30' href="https://medium.com/@shedrachmusa420/introduction-to-javascript-a-beginners-guide-58faeb3a0141"><img style={{width: '25em'}} className='img mx-auto' src={Array} alt='display'/></a>
                    <h2 className='text-center'>Introduction to JavaScript</h2>
                    <p className='max-w-sm p-2'>This article introduces you to the basics of javaScript from data type to
                    to JavaScript control structure. if you're looking to get started with JS, this is for you.</p>
             </div>
            </div>
        </div>
     );
}
 
export default Review;
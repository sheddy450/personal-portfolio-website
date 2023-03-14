import React from 'react';
import cssBook from './image/cssBook.jpg'
import jsBook from './image/jsBook.jpg'
import Array from './image/array.jpg'

const Review = () => {
    return ( 
        <div className="review">
            <h1>Technical Articles</h1>
            <div className='background-Image'>
                <div className='blog'>
                    <h2>Documentation on CSS flexbox</h2>
                    <p>This is an article on how to use the flexbox display property. <br/> 
                    click on the image to read this beautiful piece published on hashnode</p>
                    <a href="https://shedranifico.hashnode.dev/a-documentation-on-css-flexbox">   <img className='img' src={cssBook} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Introduction to JavaScript array</h2>
                    <p>This is an article on the introducttion to JavaScript array and some <br/>
                    properties and methods used in modifying an array</p>
                    <a href="https://shedranifico.hashnode.dev/javascript-arrays-introduction">   <img className='img' src={jsBook} alt='display'/></a>
                </div>
                <div className='blog'>
                    <h2>Introduction to JavaScript</h2>
                    <p>This article introuces us to the basics of javaScript from data type to<br/>
                    to JavaScript control structure</p>
                    <a href="https://hashnode.com/post/cled61n3y01g16snv5xn4g3xe">   <img className='img' src={Array} alt='display'/></a>
                </div>
            </div>
        </div>
     );
}
 
export default Review;
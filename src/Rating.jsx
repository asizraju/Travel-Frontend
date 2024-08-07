import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; 
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Rating = () => {
  return (
    <div className='container my-4'>
      <div className='text-center mb-4' style={{backgroundColor :"#d9ebdd"}}>
        <h1>Free cancellation</h1>
        <h4>You'll receive a full refund if you cancel at least 24 hours in advance of most experiences.</h4>
        <div className='review-summary'>
          <div className='d-flex justify-content-center'>
         <h3> <FaStar /></h3>
         <h3> <FaStar /></h3>
         <h3> <FaStar /></h3>
         <h3> <FaStar /></h3>
         <h3><CiStar /></h3>
          </div>
          <h3>Excellent</h3>
          <p>Based on 209,403 reviews</p>
          <p>Viator does not perform checks on Trustpilot reviews</p>
        </div>
      </div>
      <div className='reviews'>
        <div className='review'>
          <h3>The tour guide was awesome and the experience was great 10/10</h3>
          <p>Timera Mccalmon</p>
        </div>
        <div className='review'>
          <h3>The app was easy to use, and offered great deals. I’ll definitely use again for future trips !!!</h3>
          <p>Jabbar Acker</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;

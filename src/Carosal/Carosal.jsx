import React, { useState } from 'react'
import Images1 from '/src/assets/Carosalimg/Tourist-Places-in-Kodaikanal-.jpg'
import Images2 from '/src/assets/Carosalimg/fAkd.jpg'
import Images3 from '/src/assets/Carosalimg/cancun10.jpg'
import Carosalbutton from './Carosalbutton'



const Carosal = ({count,setCount}) => { 
  
    
          if (count===0) {
            return(
                <div className='Car-1'>
                    <img src={Images1} alt="" />
                </div>
            )
          } else if(count===1){
            return(
                <div className='Car-1'>
                    <img src={Images2} alt="" />
                </div>
            )
          }
          else if(count===2){
            return(
                <div className='Car-1'>
                    <img src={Images3} alt="" />
                </div>
            )
          }
          
           
          
}

export default Carosal
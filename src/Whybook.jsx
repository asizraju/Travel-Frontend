import './App.css'
import { FaSquareWebAwesome } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";


const Whybook = () => {
  
  return (
    <div className='Whybook'>
        <div className='head d-flex justify-content-center'>
            <h1>Why You Book ?</h1>
        </div>      
  <div className="WhybookConent">
    <div className="col-lg-3 col-sm-6">
        <h1><FaSquareWebAwesome /></h1>
        <h3>Ultimate Flexibility</h3>
        <p >Free cancellation and payment options to satisfy any plans or budget.</p>
        </div>
    <div className="col-lg-3 col-sm-6">
         <h1><FaStarHalfAlt /></h1>
        <h3>Earn rewards</h3>
        <p>Explore, earn, redeem, repeat with our loyalty program</p>
        </div>
    <div className="col-lg-3 col-sm-6">
         <h1><FaPhoneVolume /></h1>
        <h3>Quality at our core</h3>
        <p>High quality standards. Reliable reviews. A Tripadvisor company.</p>
        </div>
    <div className="col-lg-3 col-sm-6">
         <h1><IoCashOutline /></h1>
       <h3>24/7 customer</h3>
       <p>New price? New plan? No problem. We're here to help, 24/7.</p>
        </div>
  </div>   
    </div>
  )
}

export default Whybook
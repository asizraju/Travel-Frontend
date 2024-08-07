import React from 'react'
import Carosal from './Carosal/Carosal';
import Carosalbutton from './Carosal/Carosalbutton';
import { useState } from 'react'
import Footer from './Footer';
import Whybook from './Whybook';
import Overlay from './Overlay';
import Scroll from './Scroll';
import AddCard from './Cardcomponents/AddCard';
import Rating from './Rating';
import ListTour from './ListTour';
import Carr from './Carr';
import Naveex from './Naveex'

const Home = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <Carosal count={count} setCount={setCount}/>
       <Carosalbutton  count={count} setCount={setCount}/>
       <AddCard />
       <Overlay />
       <Carr />
       {/* <Naveex/> */}
       {/* <Scroll /> */}
       <Rating />
       <Whybook />
       <ListTour />
       <Footer />
       
       {/* <DropDown /> */}
    </div>
  )
}

export default Home
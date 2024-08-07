import React from 'react'
import './Carosal.css'

const Carosalbutton = ({count,setCount}) => {
  return (
    <div className='Carosalbutt'>
        <div className='Table d-flex displaygrid'>
            
            <div className='Table-go'>
                <h6>Wherego ?</h6>
                <input placeholder='CountryName'></input>
            </div>
            <div className='Date-go'>  
                <h6>Date</h6>
                <input placeholder='Date'></input>
            </div>
            <div className='Serach-go' style={{color:'black'}}>
                <span>Search</span>
            </div>
        </div>
    <div className='Dot'>
        <div className='Dot-1'>
            <li  onClick={()=>setCount(0)}></li>
        </div>
        <div className='Dot-2' >
            <li onClick={()=>setCount(1)}></li>
        </div>
        <div className='Dot-3'>
            <li onClick={()=>setCount(2)}></li>
        </div>
    </div>
    </div>
  )
}

export default Carosalbutton
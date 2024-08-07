import React from 'react'
import Navebarex from './Navebarex'
import { Outlet } from 'react-router-dom'

const Useroutlet = () => {
  return (
    <div>
        <Navebarex />
        <Outlet></Outlet>
    </div>
  )
}

export default Useroutlet
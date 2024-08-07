import React from 'react'
import Naveex from './Naveex'
import { Outlet } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div>
        <Naveex />
        <Outlet/>
    </div>
  )
}

export default UserLogin
import React from 'react'
import Nevbar from '../components/Nevbar'
import { Outlet } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const MainLayout = () => {
  return (
    <>
    <Nevbar />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default MainLayout
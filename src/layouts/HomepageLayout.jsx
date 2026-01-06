import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import { data } from '../data/navbarData'

const HomepageLayout = () => {
  return (
    <>
      <Navbar items={data} />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomepageLayout

import React from 'react'
import HomeNavbar from '../components/layout/HomeNavbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import { navbarData } from '../data/navbarData'

const HomepageLayout = () => {
  return (
    <>
      <HomeNavbar items={navbarData} />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomepageLayout

import React from 'react'
import HomeNavbar from '../components/layout/HomeNavbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import { navbarData } from '../data/navbarData'
import useAuthUser from '../hooks/useAuthUser'

const HomepageLayout = () => {
  const { user, isLoading } = useAuthUser()

  if (isLoading) return null

  return (
    <>
      <HomeNavbar items={navbarData} username={user?.name} />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomepageLayout

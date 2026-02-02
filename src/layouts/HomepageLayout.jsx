import HomeNavbar from '../components/layout/HomeNavbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import { navbarData, guestNavbarData } from '../data/navbarData'
import useAuthUser from '../hooks/useAuthUser'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const HomepageLayout = () => {
  const { user, isLoading } = useAuthUser()

  const cart = useSelector((state) => state.cart.items)
  const auth = useSelector((state) => state.auth.isAuthenticated)

  if (isLoading) return null

  return (
    <>
      <HomeNavbar
        items={auth ? navbarData : guestNavbarData}
        username={user?.name}
        blueDot={cart.length > 0}
      />

      <Toaster position="top-center" />
      <Outlet />
      <Footer />
    </>
  )
}
export default HomepageLayout

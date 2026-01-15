import { Outlet } from 'react-router-dom'
import AuthNavbar from '../components/layout/AuthNavbar'
import { Toaster } from 'react-hot-toast'

const AuthPageLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Toaster position="top-center" />
      <Outlet />
    </>
  )
}

export default AuthPageLayout

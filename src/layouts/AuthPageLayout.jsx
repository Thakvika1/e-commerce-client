import { Outlet } from 'react-router-dom'
import AuthNavbar from '../components/layout/AuthNavbar'

const AuthPageLayout = () => {
  return (
    <>
      <AuthNavbar />
      <Outlet />
    </>
  )
}

export default AuthPageLayout

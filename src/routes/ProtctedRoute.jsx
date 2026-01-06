import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  if (!isAuth) return <Navigate to="/login" /> // kick to login if not logged in

  return children
}
export default ProtectedRoute

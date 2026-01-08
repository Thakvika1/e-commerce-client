import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)

  return auth ? <Navigate to="/" replace /> : children
}

export default PublicRoute

import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HOME } from '../config/routes'

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)

  return auth ? <Navigate to={HOME} replace /> : children
}

export default PublicRoute

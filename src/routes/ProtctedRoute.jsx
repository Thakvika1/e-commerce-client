import { Navigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HOME } from '../config/routes'

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)

  if (!auth) return <Navigate to={HOME} replace />

  return children
}
export default ProtectedRoute

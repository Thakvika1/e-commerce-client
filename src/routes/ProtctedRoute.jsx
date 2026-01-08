import { Navigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)

  if (!auth) return <Navigate to="/" replace />

  return children
}
export default ProtectedRoute

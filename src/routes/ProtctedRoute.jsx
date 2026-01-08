import { Navigate } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, isLoading } = useAuthUser()

  if (isLoading) return null

  if (!isLoggedIn) return <Navigate to="/" replace />

  return children
}
export default ProtectedRoute

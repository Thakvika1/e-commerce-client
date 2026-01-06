import { Navigate } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuthUser()

  if (isLoading) return null

  if (user?.role !== 'admin' || !user) return <Navigate to="/" />

  return children
}
export default ProtectedRoute

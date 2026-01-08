import { Navigate } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuthUser()

  if (isLoading) return null

  if (user?.role !== 'admin' || !user) return <Navigate to="/" replace />

  return children
}

export default AdminRoute

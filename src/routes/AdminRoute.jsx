import { Navigate } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'
import { useSelector } from 'react-redux'

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuthUser()

  const auth = useSelector((state) => state.auth.isAuthenticated)

  if (isLoading) return null

  if (user?.role !== 'admin' || !auth) return <Navigate to="/" replace />

  return children
}

export default AdminRoute

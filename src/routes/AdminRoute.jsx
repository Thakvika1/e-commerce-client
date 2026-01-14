import { Navigate } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'
import { useSelector } from 'react-redux'
import { HOME } from '../config/routes'

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuthUser()

  const auth = useSelector((state) => state.auth.isAuthenticated)

  if (isLoading) return null

  if (!auth || user?.role !== 'admin') return <Navigate to={HOME} replace />

  return children
}

export default AdminRoute

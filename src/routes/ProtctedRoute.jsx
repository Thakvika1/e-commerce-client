import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HOME } from '../config/routes'
// import toast from 'react-hot-toast'

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated)

  if (!auth) {
    // toast.dismiss()
    // toast.error('You need to Login First !!')
    return <Navigate to={HOME} replace />
  }

  return children
}
export default ProtectedRoute

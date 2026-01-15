import { useLogoutUserMutation } from '../services/authApi'
import { useDispatch } from 'react-redux'
import { clearAuth } from '../features/authSlice'
import { authApi } from '../services/authApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
  const dispactch = useDispatch()
  const navigate = useNavigate()
  const [logoutUser, { isLoading }] = useLogoutUserMutation()

  const logout = async () => {
    try {
      await logoutUser().unwrap()
      dispactch(clearAuth())
      dispactch(authApi.util.resetApiState())
      toast.success('Logout Success')
      navigate('/')
    } catch (err) {
      console.log('Error :', err)
    }
  }

  return { logout, isLoading }
}

export default useLogout

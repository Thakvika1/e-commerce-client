import { useLogoutUserMutation } from '../services/authApi'
import { useDispatch } from 'react-redux'
import { clearAuth } from '../features/authSlice'
import { authApi } from '../services/authApi'

const useLogout = () => {
  const dispactch = useDispatch()
  const [logoutUser, { isLoading }] = useLogoutUserMutation()

  const logout = async () => {
    try {
      await logoutUser().unwrap()
      dispactch(clearAuth())
      dispactch(authApi.util.resetApiState())
    } catch (err) {
      console.log('Logout API failed')
    }
  }

  return { logout, isLoading }
}

export default useLogout

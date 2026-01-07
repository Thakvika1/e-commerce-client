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
      dispactch(authApi.util.resetApiState())
      dispactch(clearAuth())
    } catch (err) {
      console.log('Logout API failed')
    }
  }

  return { logout, isLoading }
}

export default useLogout

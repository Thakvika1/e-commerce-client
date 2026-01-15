import { useLogoutUserMutation } from '../services/authApi'
import { useDispatch } from 'react-redux'
import { clearAuth } from '../features/authSlice'
import { authApi } from '../services/authApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../features/cartSlice'

const useLogout = () => {
  const dispactch = useDispatch()
  const navigate = useNavigate()
  const [logoutUser, { isLoading }] = useLogoutUserMutation()

  const logout = async () => {
    try {
      await logoutUser().unwrap()

      // clear user credetial
      dispactch(clearAuth())
      dispactch(authApi.util.resetApiState())

      // clear user cart
      dispactch(clearCart())

      // show notification
      toast.success('Logout Success')

      // return back to homepage
      navigate('/')
    } catch (err) {
      console.log('Error :', err)
    }
  }

  return { logout, isLoading }
}

export default useLogout

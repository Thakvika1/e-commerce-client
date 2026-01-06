import { useGetAuthUserQuery } from '../services/authApi'
import { useSelector } from 'react-redux'

const useAuthUser = () => {
  const token = useSelector((state) => state.auth.token)

  const { data, isLoading, error } = useGetAuthUserQuery(undefined, {
    skip: !token,
  })

  return {
    user: data?.user ?? null,
    isLoading,
    error,
    isLoggedIn: !!token,
  }
}

export default useAuthUser

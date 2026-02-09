import { useGetAuthUserQuery } from '../services/authApi'
import { useSelector } from 'react-redux'

const useAuthUser = () => {
  const token = useSelector((state) => state.auth.token)

  const { data, isLoading, error } = useGetAuthUserQuery(undefined, {
    skip: !token,
  })

  // console.log(data?.data)

  return {
    user: data?.data ?? null,
    isLoading,
    error,
  }
}

export default useAuthUser

import useAuthUser from '../hooks/useAuthUser'
import useLogout from '../hooks/useLogout'

const UserDetail = () => {
  const { user, isLoading } = useAuthUser()
  const { logout } = useLogout()

  if (isLoading) return null

  return (
    <>
      <h1>{user?.name}</h1>
      <h1>{user?.role}</h1>
      <button
        onClick={logout}
        className="px-4 cursor-pointer items-center justify-center rounded-lg h-12 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all shadow-md active:scale-[0.98] mt-2"
      >
        Logout
      </button>
    </>
  )
}

export default UserDetail

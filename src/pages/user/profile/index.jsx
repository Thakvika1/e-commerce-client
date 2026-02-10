import Sidebar from './Sidebar'
import ProfileCard from './ProfileCard'
import RecentOrders from './RecentOrder'
import useAuthUser from '../../../hooks/useAuthUser'

const Profile = () => {
  const { user, isLoading } = useAuthUser()

  if (isLoading) return null
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-20 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar role={user?.role} />
        <div className="flex-1 flex flex-col gap-8">
          <ProfileCard user={user} />
          <RecentOrders />
        </div>
      </div>
    </main>
  )
}

export default Profile

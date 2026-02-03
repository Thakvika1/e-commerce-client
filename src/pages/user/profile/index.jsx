import Sidebar from './Sidebar'
import ProfileCard from './ProfileCard'
import RecentOrders from './RecentOrder'

const Profile = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 lg:px-20 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <Sidebar />
        <div className="flex-1 flex flex-col gap-8">
          <ProfileCard />
          <RecentOrders />
        </div>
      </div>
    </main>
  )
}

export default Profile

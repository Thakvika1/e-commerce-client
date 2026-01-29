import Sidebar from './Sidebar'
import ProfileCard from './ProfileCard'
import RecentOrders from './RecentOrder'

const Profile = () => {
  return (
    // <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 font-sans min-h-screen">
      <main className="max-w-7xl mx-auto px-4 lg:px-20 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <Sidebar />
          <div className="flex-1 flex flex-col gap-8">
            <ProfileCard />
            <RecentOrders />
            {/* <RecommendedProducts /> */}
          </div>
        </div>
      </main>
    // </div>
  )
}

export default Profile

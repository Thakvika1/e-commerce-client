import useAuthUser from '../../../hooks/useAuthUser'

function ProfileCard() {
  const { user, isLoading } = useAuthUser()

  if (isLoading) return null
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div
              className="size-24 md:size-32 rounded-full bg-slate-100 dark:bg-slate-700 bg-cover bg-center border-4 border-white dark:border-slate-800 shadow-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHFoM3rroQ1B53AizQ3gC1nyGP8cFXTGW3SBEzQGZCMhfc4Z8R6XcTWRisdhGrfxojxzRJVcnFbtcmI4DPSHogVVjvgW7bJVej0lubFsMGFLUp59rfaHjfmvSCUgceE8GHldFk8SRzU6uqkVYxxypudoMLWWknjjTi8zhS0qOS_0Y9JsAAfaBx5ZdrOmphQHwea8o-yDOUSg8VVG2Tf4xpzJVQzPsUJv4V7ADxUke1A4Li6qFkuBbqEUiRufbq1qugcSuu8PXD94s")',
              }}
            />
            <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-1.5 rounded-full border-2 border-white dark:border-slate-800 cursor-pointer hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-sm">
                photo_camera
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {user?.name}
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">mail</span>
              {user?.email}
            </p>
            <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">
                manage_accounts
              </span>
              <span
                className={`text-sm font-semibold uppercase  ${
                  user?.role === 'admin' ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {user?.role}
              </span>
            </p>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">edit</span>
          Edit Profile
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-slate-100 dark:border-slate-700">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Phone Number
          </h4>
          <p className="text-slate-900 dark:text-slate-200 font-medium">
            +1 (555) 000-0000
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Default Address
          </h4>
          <p className="text-slate-900 dark:text-slate-200 font-medium">
            123 Market St, San Francisco, CA 94103
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard

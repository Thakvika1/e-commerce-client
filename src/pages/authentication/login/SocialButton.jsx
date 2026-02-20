import React from 'react'

const SocialButton = () => {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center gap-4 py-6">
        <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
        <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
          Or continue with
        </span>
        <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
      </div>

      {/* Social Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm"
        >
          <img
            className="w-5 h-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsTHnWeOcXVD1WrrGIB5eKTPko7k1mFGtVZK_689A0KcP4YRJ4hjaFPhwAEKPhVjjO9HMV17dcRQpbixDdQPMKu4sVPueSaZKh6b3X1WdxSsqe_oGg4M8zMqWm16FuTxzuJDTwoDqpEL1REjK_xrwf9yEtQoC3sXf7e6F1-X05KTe3k9KHiVZvbBWWOZntxrYB9NZVaaygzamKuDlq_Amspzn9wy_ubtfC5rCWVkT_trUH-mvNQ8n5GPtCLKBzwk_EBxyH3q78MNA"
          />
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm"
        >
          <img
            className="w-5 h-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSS2ehTtWxMG5375BawDuKZSlNgtLyyerz6g76U7CMTBPOQkurJf-cqsUE6AWywIsup4TbPzbVPGjdx7KQN3gBCF7yMDd1DRZTPdZxrRtVYm-B159DCCHNCQOa1qu_phzVWDjOL6p42Gefmj8GkB4t3LJiBUo3M8kw0ThcUxhVEWVRKF-qUurjtOcWbcY5SbPAAFCexyFt7nuSsquhCjL1XTXxnO8xePcxKWW4arhfy-MsyD18x7oNv42xlfV6HkA-7N6yY8UrXw0"
          />
          Facebook
        </button>
      </div>
    </>
  )
}

export default SocialButton

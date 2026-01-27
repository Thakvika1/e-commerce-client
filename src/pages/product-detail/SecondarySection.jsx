import React from 'react'

const SecondarySection = () => {
  return (
    <div className="mt-16 border-t border-[#e7edf3] dark:border-[#2a3642] pt-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* <!-- Sidebar Navigation for Details --> */}
        <div className="md:w-1/4 flex flex-col gap-1">
          <button className="text-left px-4 py-3 rounded-lg bg-primary/10 text-primary font-bold">
            Product Description
          </button>
          <button className="text-left px-4 py-3 rounded-lg text-[#4c739a] dark:text-[#8b9bb4] hover:bg-gray-100 dark:hover:bg-[#1a2632] transition-colors font-medium">
            Specifications
          </button>
          <button className="text-left px-4 py-3 rounded-lg text-[#4c739a] dark:text-[#8b9bb4] hover:bg-gray-100 dark:hover:bg-[#1a2632] transition-colors font-medium">
            Reviews (128)
          </button>
          <button className="text-left px-4 py-3 rounded-lg text-[#4c739a] dark:text-[#8b9bb4] hover:bg-gray-100 dark:hover:bg-[#1a2632] transition-colors font-medium">
            Shipping &amp; Returns
          </button>
        </div>
        {/* <!-- Content Area --> */}
        <div className="md:w-3/4">
          <h3 className="text-xl font-bold text-[#0d141b] dark:text-white mb-4">
            Unmatched Sound Quality
          </h3>
          <p className="text-[#4c739a] dark:text-[#9ba8b8] leading-relaxed mb-6">
            The SonicPulse Pro headphones are engineered to deliver a superior
            audio experience. Whether you're in a busy office, commuting on a
            train, or relaxing at home, our advanced Active Noise Cancellation
            (ANC) technology blocks out distractions so you can focus on what
            matters most—your music.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#e7edf3] dark:border-[#2a3642]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">graphic_eq</span>
              </div>
              <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">
                Deep Bass, Crystal Highs
              </h4>
              <p className="text-sm text-[#4c739a] dark:text-[#9ba8b8]">
                Custom 40mm drivers produce a rich soundstage with punchy bass
                and clear vocals.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#e7edf3] dark:border-[#2a3642]">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined">
                  battery_charging_full
                </span>
              </div>
              <h4 className="font-bold text-[#0d141b] dark:text-white mb-2">
                All-Day Battery
              </h4>
              <p className="text-sm text-[#4c739a] dark:text-[#9ba8b8]">
                Enjoy up to 30 hours of playtime on a single charge. Quick
                charge gives you 5 hours in just 10 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondarySection

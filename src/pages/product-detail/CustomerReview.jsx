import React from 'react'

const CustomerReview = () => {
  return (
    <div className="mt-16 mb-20">
      <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-8">
        Customer Reviews
      </h3>
      <div className="bg-white dark:bg-[#1a2632] rounded-xl p-8 border border-[#e7edf3] dark:border-[#2a3642]">
        <div className="flex flex-wrap gap-x-12 gap-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-[#0d141b] dark:text-white text-5xl font-black leading-tight tracking-[-0.033em]">
              4.5
            </p>
            <div className="flex gap-1 text-primary">
              <span className="material-symbols-outlined text-[24px] fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-[24px] fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-[24px] fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-[24px] fill-current">
                star
              </span>
              <span className="material-symbols-outlined text-[24px]">
                star_half
              </span>
            </div>
            <p className="text-[#4c739a] dark:text-[#8b9bb4] text-base font-medium">
              Based on 128 reviews
            </p>
          </div>
          <div className="flex-1 grid min-w-[200px] max-w-[500px] grid-cols-[20px_1fr_40px] items-center gap-y-3 gap-x-4">
            <p className="text-[#0d141b] dark:text-white text-sm font-medium">
              5
            </p>
            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
              <div
                className="rounded-full bg-primary"
                style={{ width: '75%' }}
              ></div>
            </div>
            <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
              75%
            </p>
            <p className="text-[#0d141b] dark:text-white text-sm font-medium">
              4
            </p>
            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
              <div
                className="rounded-full bg-primary"
                style={{ width: '15%' }}
              ></div>
            </div>
            <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
              15%
            </p>
            <p className="text-[#0d141b] dark:text-white text-sm font-medium">
              3
            </p>
            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
              <div
                className="rounded-full bg-primary"
                style={{ width: '3%' }}
              ></div>
            </div>
            <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
              3%
            </p>
            <p className="text-[#0d141b] dark:text-white text-sm font-medium">
              2
            </p>
            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
              <div
                className="rounded-full bg-primary"
                style={{ width: '2%' }}
              ></div>
            </div>
            <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
              2%
            </p>
            <p className="text-[#0d141b] dark:text-white text-sm font-medium">
              1
            </p>
            <div className="flex h-2.5 flex-1 overflow-hidden rounded-full bg-[#cfdbe7] dark:bg-[#2a3642]">
              <div
                className="rounded-full bg-primary"
                style={{ width: '5%' }}
              ></div>
            </div>
            <p className="text-[#4c739a] dark:text-[#8b9bb4] text-sm font-medium text-right">
              5%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview

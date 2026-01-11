import React from 'react'
import HeadLine from './HeadLine'
import Form from './Form'
import Footer from './Footer'

const index = () => {
  return (
    <>
      <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
        <div className="w-full max-w-[480px]  rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all">
          <div className="p-8 sm:p-10 flex flex-col gap-6">
            <HeadLine />
            <Form />
            <Footer />
          </div>
        </div>
      </main>
    </>
  )
}

export default index

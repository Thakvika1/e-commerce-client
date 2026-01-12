import React from 'react'
import CardHeader from './CardHeader'
import Form from './Form'
import SocialButton from './SocialButton'
import Footer from './Footer'

const index = () => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 sm:p-8 bg-background-light dark:bg-background-dark min-h-screen font-display">
      <div className="w-full max-w-[520px] rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all">
        <CardHeader />
        <div className="px-8 pb-10 pt-4">
          <Form />
          <SocialButton />
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default index

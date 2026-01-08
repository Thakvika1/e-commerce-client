import React from 'react'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import ProductContent from './ProductContent'
import { useSelector } from 'react-redux'

const index = () => {
  const auth = useSelector((state) => state.auth)
  console.log('auth : ', auth)
  return (
    <>
      <main className="flex-grow">
        <div className="max-w-[960px] mx-auto px-4 md:px-10 py-8">
          <HeroSection />
          <FeatureSection />
          <ProductContent />
        </div>
      </main>
    </>
  )
}

export default index

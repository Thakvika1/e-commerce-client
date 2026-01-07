import React from 'react'
import ProductCard from '../components/cards/ProductCard'
import { useEffect, useState } from 'react'
import starbuck from '../assets/images/starbuck.avif'
import { useGetProductsQuery } from '../services/productApi'
import ProductCardSkeleton from '../components/cards/ProductCardSkeleton'

const Homepage = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  if (error) return <p>Something went wrong</p>
  // if (isLoading) return <p>Loading...</p>

  // console.log(data)

  const lenthData = data?.data?.data.length || 6

  return (
    <>
      <main className="flex-grow">
        <div className="max-w-[960px] mx-auto px-4 md:px-10 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {isLoading
              ? Array.from({ length: lenthData }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))
              : data.data.data.map((product) => (
                  <ProductCard
                    key={product.id}
                    // productImage={starbuck}
                    productDesciption={product.category.name}
                    productName={product.name}
                    productPrice={product.price}
                  />
                ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Homepage

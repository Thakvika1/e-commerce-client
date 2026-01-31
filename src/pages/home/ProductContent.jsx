import ProductCard from '../../components/cards/ProductCard'
import ProductCardSkeleton from '../../components/cards/ProductCardSkeleton'
import { useGetProductsQuery } from '../../services/productApi'
import { useEffect, useState, useRef } from 'react'

const ProductContent = () => {
  const [page, setPage] = useState(1)
  const loaderRef = useRef(null)

  const { data, error, isLoading, isFetching } = useGetProductsQuery({ page })

  // Are there more pages on the backend
  const hasMore = data?.data?.current_page < data?.data?.last_page

  // if (isLoading) return <p>Loading...</p>
  // console.log(data)

  // 👇 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0].isIntersecting mean Bottom element is visible on screen
        if (entries[0].isIntersecting && hasMore && !isFetching) {
          setPage((prev) => prev + 1)
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()

    // run everytime hasMore and isFetching change
  }, [hasMore, isFetching])


  
  if (error) return <p>Something went wrong</p>

  const lengthData = data?.data?.data.length ?? 6

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* First load */}
        {isLoading &&
          Array.from({ length: lengthData }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}

        {/* Data */}
        {data?.data?.data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* Fetching next page */}
        {isFetching &&
          !isLoading &&
          Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={`fetch-${i}`} />
          ))}
      </div>

      {/*  observer target */}
      <div ref={loaderRef} style={{ height: 20 }} />
    </>
  )
}

export default ProductContent

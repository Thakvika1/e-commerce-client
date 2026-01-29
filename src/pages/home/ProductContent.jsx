import ProductCard from '../../components/cards/ProductCard'
import ProductCardSkeleton from '../../components/cards/ProductCardSkeleton'
import { useGetProductsQuery } from '../../services/productApi'

const ProductContent = () => {
  const { data, error, isLoading } = useGetProductsQuery()

  if (error) return <p>Something went wrong</p>

  // if (isLoading) return <p>Loading...</p>
  // console.log(data)

  const lenthData = data?.data?.data.length ?? 6

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {isLoading
        ? Array.from({ length: lenthData }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : data.data.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  )
}

export default ProductContent

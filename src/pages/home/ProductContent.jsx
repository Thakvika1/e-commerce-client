import ProductCard from '../../components/cards/ProductCard'
import ProductCardSkeleton from '../../components/cards/ProductCardSkeleton'
import { useGetProductsQuery } from '../../services/productApi'
import { useCart } from '../../hooks/useCart'

const ProductContent = () => {
  const { addToCart } = useCart()

  const { data, error, isLoading } = useGetProductsQuery()

  if (error) return <p>Something went wrong</p>
  // if (isLoading) return <p>Loading...</p>

  const lenthData = data?.data?.data.length ?? 6

  // console.log(data)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {isLoading
        ? Array.from({ length: lenthData }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : data.data.data.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addProduct={addToCart}
            />
          ))}
    </div>
  )
}

export default ProductContent

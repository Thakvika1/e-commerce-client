import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../services/productApi'
import Product from './Product'
import ProductInfo from './ProductInfo'
import RelativeProduct from './RelativeProduct'
import CustomerReview from './CustomerReview'
import SecondarySection from './SecondarySection'

const ProductDetail = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useGetProductByIdQuery(id)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  console.log(data)
  return (
    <>
      <>
        {/* <h1>{data.item.name}</h1>
        <p>${data.item.price}</p>
        <p>{data.item.stock}</p> */}
        <main className="grow w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <Product />
              <RelativeProduct />
            </div>
            <ProductInfo product={data.item} />
          </div>
          <SecondarySection />
          <CustomerReview />
        </main>
      </>
    </>
  )
}

export default ProductDetail

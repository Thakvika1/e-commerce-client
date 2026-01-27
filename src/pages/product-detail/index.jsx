import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../../services/productApi'
import Product from './Product'

const ProductDetail = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useGetProductByIdQuery(id)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Something went wrong</p>

  // console.log(data)
  return (
    <>
      <div>
        <h1>{data.item.name}</h1>
        <p>${data.item.price}</p>
        <p>{data.item.stock}</p>
        {/* <Product /> */}
      </div>
    </>
  )
}

export default ProductDetail

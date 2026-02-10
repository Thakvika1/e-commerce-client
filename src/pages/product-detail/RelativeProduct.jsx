import React from 'react'
import { useGetCategoryByIdQuery } from '../../services/categoryApi'
import { Link } from 'react-router-dom'

const RelativeProduct = ({ categoryId }) => {
  const { data, isLoading } = useGetCategoryByIdQuery(categoryId)

  if (isLoading) return null

  // test
  // const productRelative = data.data.products.filter(
  //   (product) => product.category_id === categoryId
  // )

  const productRelative = data.data.products

  console.log('category data : ', productRelative)

  return (
    <>
      <h1 className="text-[#0d141b] dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-2">
        Relative Product
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {productRelative.map((item) => (
          <Link
            key={item.id}
            className="aspect-square overflow-hidden rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            to={`/product/${item.id}`}
            replace={true}
          >
            <img
              alt="Thumbnail of headphones front view"
              className="h-full w-full object-cover opacity-70 hover:opacity-100 transition-opacity"
              src={`${item.image}`}
            />
          </Link>
        ))}
      </div>
    </>
  )
}

export default RelativeProduct

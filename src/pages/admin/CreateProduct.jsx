import React from 'react'
import { useState } from 'react'
import { useCreateProductMutation } from '../../services/productApi'

const CreateProduct = () => {
  const [createProduct, { isLoading, error }] = useCreateProductMutation()

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    category_id: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    try {
      await createProduct(formData).unwrap()
      alert('Product Created')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input name="name" onChange={handleChange} placeholder="Name" />
        <input name="price" onChange={handleChange} placeholder="Price" />
        <input name="stock" onChange={handleChange} placeholder="Stock" />
        <input name="category_id" onChange={handleChange} placeholder="Category Id" />
        <button disabled={isLoading}>Create</button>
        {error && <p>Error creating product</p>}
      </form>
    </>
  )
}

export default CreateProduct

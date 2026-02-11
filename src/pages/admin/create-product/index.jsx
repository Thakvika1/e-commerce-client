import Input from '../../../components/common/Input'
import { useForm } from '../../../hooks/useForm'
import { VALIDATION_RULES } from '../../../config/validateRules'
import { errorBorderClass, getFieldError } from '../../../utils/formErrors'
import { useState } from 'react'
import { useCreateProductMutation } from '../../../services/productApi'
import { useGetCategoriesQuery } from '../../../services/categoryApi'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from './Header'
import InputImage from './InputImage'

const CreateProduct = () => {
  const navigate = useNavigate()
  const [createProduct, { isLoading }] = useCreateProductMutation()

  // Handle image selection and preview
  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setImage(file)
  }

  const initialValues = {
    name: '',
    price: '',
    stock: '',
    category_id: '',
    description: '',
  }

  const {
    // formData,
    // setFormData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, VALIDATION_RULES.createProduct)

  // console.log(errors)
  // category fetching
  const {
    data,
    isLoading: isCategoriesLoading,
    // error: isCategoriesError,
  } = useGetCategoriesQuery()
  if (isCategoriesLoading) return null

  const categories = data.data
    // console.log('categories data : ', categories)

  const handleCreateProduct = async (data) => {
    try {
      // FormData is a built-in browser class, and JavaScript is case-sensitive:
      const form = new FormData()
      form.append('name', data.name)
      form.append('price', data.price)
      form.append('category_id', data.category_id)
      form.append('stock', data.stock)
      form.append('description', data.description)
      form.append('image', image)
      // data.append('image', image)

      // console.log(data)

      await createProduct(form).unwrap()
      toast.success('Product Created Successfully')
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message)
      if (err?.data) setErrors(err.data)
      console.log('error : ', err)
    }
  }
  //   console.log('formData : ', formData)

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Header />

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#cfdbe7] dark:border-slate-800 p-8">
          {/* form  */}
          <form
            className="space-y-8"
            onSubmit={handleSubmit(handleCreateProduct)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                  Product Name
                </span>
                <Input
                  name="name"
                  placeholder="Product Name"
                  handleChange={handleChange}
                  type="text"
                  className={errorBorderClass(errors, 'name')}
                />
                {getFieldError(errors, 'name') && (
                  <p className="text-red-500 text-sm mt-1">
                    {getFieldError(errors, 'name')}
                  </p>
                )}
              </label>

              <label className="flex flex-col">
                <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                  Category
                </span>
                <div>
                  <select
                    onChange={handleChange}
                    name="category_id"
                    className={`appearance-none w-full rounded-xl border border-slate-300 dark:border-slate-700 
                            bg-white dark:bg-slate-800 text-slate-900 dark:text-white 
                            px-4 h-12 text-base font-medium 
                            focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
                            cursor-pointer transition-all ${errorBorderClass(errors, 'category_id')}`}
                  >
                    <option value="">Select a category</option>

                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {getFieldError(errors, 'category_id') && (
                    <p className="text-red-500 text-sm mt-1">
                      {getFieldError(errors, 'category_id')}
                    </p>
                  )}
                </div>
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                Product Description (optional)
              </span>
              <textarea
                name="description"
                onChange={handleChange}
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] min-h-[100px] p-4 text-base font-normal transition-all"
                placeholder="Tell customers about your product..."
              ></textarea>
              {getFieldError(errors, 'description') && (
                <p className="text-red-500 text-sm mt-1">
                  {getFieldError(errors, 'description')}
                </p>
              )}
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                  Price $
                </span>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4c739a] font-medium ">
                    $
                  </span>
                  <Input
                    name="price"
                    placeholder="Product Price"
                    handleChange={handleChange}
                    type="number"
                    className={`${errorBorderClass(errors, 'price')} pl-7`}
                  />
                </div>
                {getFieldError(errors, 'price') && (
                  <p className="text-red-500 text-sm mt-1">
                    {getFieldError(errors, 'price')}
                  </p>
                )}
              </label>
              <label className="flex flex-col">
                <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                  Stock Level
                </span>
                <Input
                  name="stock"
                  placeholder="Quantity in Stock"
                  handleChange={handleChange}
                  type="number"
                  className={`${errorBorderClass(errors, 'stock')}`}
                />
                {getFieldError(errors, 'stock') && (
                  <p className="text-red-500 text-sm mt-1">
                    {getFieldError(errors, 'stock')}
                  </p>
                )}
              </label>
            </div>

            <InputImage
              imageError={getFieldError(errors, 'image')}
              image={image}
              handleImageChange={handleImageChange}
            />

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col-reverse sm:flex-row justify-end gap-3">
              <Link
                className="px-8 py-3 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                to={'/'}
              >
                Cancel
              </Link>
              <button
                className="cursor-pointer px-8 py-3 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all active:scale-[0.98]"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Creating...' : 'Create Product'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default CreateProduct

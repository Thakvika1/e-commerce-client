import Input from '../../../components/common/Input'
import { useForm } from '../../../hooks/useForm'
import { VALIDATION_RULES } from '../../../config/validateRules'
import { errorBorderClass, getFieldError } from '../../../utils/formErrors'
import { useState } from 'react'
import { useCreateProductMutation } from '../../../services/productApi'
import { useGetCategoriesQuery } from '../../../services/categoryApi'

const CreateProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Create Product — form submitted (demo)')
  }

  const [image, setImage] = useState(null)

  const initialValues = {
    name: '',
    price: '',
    stock: '',
    category_id: '',
    description: '',
    image: '',
  }

  const {
    formData,
    setFormData,
    errors,
    setErrors,
    handleChange,
    // handleSubmit,
  } = useForm(initialValues, VALIDATION_RULES.createProduct)

  const {
    data,
    isLoading: isCategoriesLoading,
    error,
  } = useGetCategoriesQuery()

  if (isCategoriesLoading) return <p>Loading categories...</p>
  if (error) return <p>Error loading categories</p>
  const categories = data.data.data
  //   console.log('categories data : ', categories)

  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 py-2 mb-4">
          <a
            className="text-[#4c739a] text-sm font-medium hover:underline"
            href="#"
          >
            Home
          </a>
          <span className="text-[#4c739a] text-sm font-medium">/</span>
          <a
            className="text-[#4c739a] text-sm font-medium hover:underline"
            href="#"
          >
            Products
          </a>
          <span className="text-[#4c739a] text-sm font-medium">/</span>
          <span className="text-primary text-sm font-bold">
            Create New Product
          </span>
        </div>

        <div className="mb-8">
          <h1 className="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Create New Product
          </h1>
          <p className="text-[#4c739a] dark:text-slate-400 text-base font-normal mt-2">
            Add high-quality photos and detailed descriptions to boost your
            sales.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-[#cfdbe7] dark:border-slate-800 p-8">
          {/* form  */}
          <form className="space-y-8" onSubmit={handleSubmit}>
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
                  className={errorBorderClass(errors, 'name', 'login')}
                />
              </label>

              <label className="flex flex-col">
                <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                  Category
                </span>
                <div>
                  <select
                    className="appearance-none w-full rounded-xl border border-slate-300 dark:border-slate-700 
                            bg-white dark:bg-slate-800 text-slate-900 dark:text-white 
                            px-4 h-12 text-base font-medium 
                            focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
                            cursor-pointer transition-all"
                  >
                    {categories.map((category) => (
                      <option
                        // className="rounded-xl"
                        key={category.id}
                        value={category.id}
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
            </div>

            <label className="flex flex-col">
              <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                Product Description (optional)
              </span>
              <textarea
                className="form-input flex w-full rounded-lg text-[#0d141b] dark:text-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] min-h-[100px] p-4 text-base font-normal transition-all"
                placeholder="Tell customers about your product..."
              ></textarea>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col">
                <span className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                  Price $
                </span>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4c739a] font-medium">
                    $
                  </span>
                  <Input
                    name="price"
                    placeholder="Product Price"
                    handleChange={handleChange}
                    type="number"
                    className={`${errorBorderClass(errors, 'price', 'login')} pl-7`}
                  />
                </div>
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
                  className={`${errorBorderClass(errors, 'stock', 'login')}`}
                />
              </label>
            </div>

            <div>
              <p className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
                Product Images
              </p>
              <div className="border-2 border-dashed border-[#cfdbe7] dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-background-light/50 dark:bg-slate-800/30 hover:border-primary/50 transition-all cursor-pointer">
                <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-3xl">
                    cloud_upload
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-[#0d141b] dark:text-slate-200 text-base font-bold">
                    Click to upload or drag and drop
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col-reverse sm:flex-row justify-end gap-3">
              <button
                className="px-8 py-3 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                type="button"
              >
                Cancel
              </button>
              <button
                className="cursor-pointer px-8 py-3 rounded-lg bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all active:scale-[0.98]"
                type="submit"
                disabled={false}
              >
                Create Product
              </button>
            </div>
          </form>
        </div>

        <footer className="mt-12 text-center text-[#4c739a] text-sm">
          <p>© 2024 Admin Dashboard. All inventory changes are logged.</p>
        </footer>
      </main>
    </>
  )
}

export default CreateProduct

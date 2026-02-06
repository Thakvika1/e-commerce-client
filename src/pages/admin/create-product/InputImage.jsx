const InputImage = ({ imageError, image, handleImageChange }) => {
  return (
    <div>
      <p className="text-[#0d141b] dark:text-slate-200 text-base font-semibold pb-2">
        Product Images
      </p>
      <input
        id="image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
      <label
        className=" border-2 border-dashed border-[#cfdbe7] dark:border-slate-700 rounded-xl p-10 flex flex-col items-center justify-center bg-background-light/50 dark:bg-slate-800/30 hover:border-primary/50 transition-all cursor-pointer"
        htmlFor="image"
      >
        {image ? (
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-40 shadow-md transition-all group-hover:scale-[1.02]"
            style={{
              backgroundImage: `url("${image ? URL.createObjectURL(image) : ''}")`,
            }}
          />
        ) : (
          <>
            <div className="size-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-3xl">
                cloud_upload
              </span>
            </div>
            <div className="text-center">
              <p className="text-[#0d141b] dark:text-slate-200 text-base font-bold">
                Click to upload or drag and drop
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                PNG, JPG, or JPEG (max 2MB)
              </p>
            </div>
          </>
        )}
      </label>
      {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
    </div>
  )
}

export default InputImage

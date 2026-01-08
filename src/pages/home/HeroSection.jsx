import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg mb-12 group">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      <div
        className="h-[400px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        data-alt="Fashion model walking in a shopping mall with bags"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWWXqZLqRA36nlwETG_PKLLEm3Mqss7lwQmYcGce9RUWhFo38MPpKwlKXT6RbZKnhDqkTgDleCsIg9ftZzgaiMq8aB_khKyATI7EiZa8YQsUAtxLFBNH8_FVQTsscwQOtGcvaD9wLNSpe9RvJLuqXzMFLgIs_MaCXaIUWp8aWg5sJtW8HNLrTKeieJ4cEmguHeUFoZ8BTVKPsMsQNMTtG9jjOXlGAXZej_0shB83v9ovmL-niAFwSFvygfoDFTaC127LZZ1qP8YUE')",
        }}
      ></div>
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start p-8 md:p-12">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-white uppercase bg-primary rounded-full">
          New Season
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
          Summer Collection
          <br />
          Has Arrived
        </h1>
        <p className="text-slate-200 text-lg mb-8 max-w-md">
          Discover the latest trends in fashion with our exclusive summer
          selection. Comfort meets style.
        </p>
        <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/30 flex items-center gap-2">
          Shop Now
          <span className="material-symbols-outlined text-[20px]">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  )
}

export default HeroSection

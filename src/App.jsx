import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { data } from './data/navbarData'
import Button from './components/common/Button'
import ProductCard from './components/cards/ProductCard'
import starbuck from './assets/images/starbuck.avif'
import starbuck2 from './assets/images/starbuck2.jpg'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import Cart from './pages/user/cart'
import { useEffect, useState } from 'react'
import Homepage from './pages/Homepage'
import { useGetProductsQuery } from './services/productApi'
import CreateProduct from './pages/admin/CreateProduct'
import ProductDetail from './pages/ProductDetail'
import { useGetAuthUserQuery } from './services/authApi'
import { BrowserRouter } from 'react-router-dom'
import HomepageRoute from './routes/HomepageRoute'

const App = () => {
  return (
    <>
      {/* <Navbar items={data} /> */}
      {/* <Button /> */}
      {/* <ProductCard image={starbuck2} /> */}
      {/* <Cart /> */}

      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ProductDetail /> */}
      {/* <Homepage /> */}
      {/* <CreateProduct /> */}
      {/* {productData} */}
      {/* <Footer /> */}
      <BrowserRouter>
        <HomepageRoute />
      </BrowserRouter>
    </>
  )
}

export default App

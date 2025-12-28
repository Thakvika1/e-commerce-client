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

const App = () => {
  return (
    <>
      <Navbar items={data} />
      {/* <Button /> */}
      {/* <ProductCard image={starbuck2} /> */}

      <Login />
      {/* <Register /> */}
      <Footer />
    </>
  )
}

export default App

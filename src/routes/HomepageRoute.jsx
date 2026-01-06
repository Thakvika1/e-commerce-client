import React from 'react'
import HomepageLayout from '../layouts/HomepageLayout'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from '../pages/authentication/Login'
import Register from '../pages/authentication/Register'
import Homepage from '../pages/Homepage'
import CreateProduct from '../pages/admin/CreateProduct'
import ProtectedRoute from './ProtctedRoute'
import ProductDetail from '../pages/ProductDetail'
import PublicRoute from './PublicRoute'
import UserDetail from '../pages/UserDetail'

const HomepageRoute = () => {
  const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]

  return (
    <Routes>
      <Route element={<HomepageLayout />}>
        <Route path="/" element={<Homepage />} />

        {/* Auth routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}

        {/* Admin protected route */}
        <Route
          path="/admin/create-product"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />

        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/user-detail" element={<UserDetail />} />
      </Route>
    </Routes>
  )
}

export default HomepageRoute

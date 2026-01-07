import React from 'react'
import HomepageLayout from '../layouts/HomepageLayout'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/authentication/Login'
import Register from '../pages/authentication/Register'
import Homepage from '../pages/Homepage'
import CreateProduct from '../pages/admin/CreateProduct'
import ProtectedRoute from './ProtctedRoute'
import ProductDetail from '../pages/ProductDetail'
import PublicRoute from './PublicRoute'
import UserDetail from '../pages/UserDetail'
import AdminRoute from './AdminRoute'
import AuthPageLayout from '../layouts/AuthPageLayout'

const HomepageRoute = () => {
  // route that already login can't access
  const publicRoutes = [
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
  ]

  // auth route that need login to access
  const authRoute = [{ path: '/user-detail', element: <UserDetail /> }]

  return (
    <Routes>
      <Route element={<HomepageLayout />}>
        <Route path="/" element={<Homepage />} />

        {/* Admin protected route */}
        <Route
          path="/admin/create-product"
          element={
            <AdminRoute>
              <CreateProduct />
            </AdminRoute>
          }
        />

        {/* Public routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}

        {/* Auth routes */}
        {authRoute.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}

        <Route path="/product-detail" element={<ProductDetail />} />
      </Route>
      {/* <Route element={<AuthPageLayout />}>
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}
      </Route> */}
    </Routes>
  )
}

export default HomepageRoute

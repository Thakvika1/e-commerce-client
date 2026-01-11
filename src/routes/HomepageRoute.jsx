import React from 'react'
import HomepageLayout from '../layouts/HomepageLayout'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/authentication/Register'
import CreateProduct from '../pages/admin/CreateProduct'
import ProtectedRoute from './ProtctedRoute'
import ProductDetail from '../pages/ProductDetail'
import PublicRoute from './PublicRoute'
import UserDetail from '../pages/UserDetail'
import AdminRoute from './AdminRoute'
import Home from '../pages/home'
import Login from '../pages/authentication/login'
import { HOME } from '../config/routes'
import { LOGIN } from '../config/routes'
import { REGISTER } from '../config/routes'

const HomepageRoute = () => {
  // route that already login can't access
  const publicRoutes = [
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> },
  ]

  // auth route that need login to access
  const authRoute = [{ path: '/user-detail', element: <UserDetail /> }]

  return (
    <Routes>
      <Route element={<HomepageLayout />}>
        {/* everyone can access  */}
        <Route path={HOME} element={<Home />} />

        {/* Admin protected route */}
        <Route
          path="/admin/create-product"
          element={
            <AdminRoute>
              <CreateProduct />
            </AdminRoute>
          }
        />

        {/* user already logged in cannot access routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}

        {/* Only for logged in user*/}
        {authRoute.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}

        <Route path="/product-detail" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default HomepageRoute

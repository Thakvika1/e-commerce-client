import HomepageLayout from '../layouts/HomepageLayout'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../pages/admin/CreateProduct'
import ProtectedRoute from './ProtctedRoute'
import PublicRoute from './PublicRoute'
import AdminRoute from './AdminRoute'
import Home from '../pages/home'
import Login from '../pages/authentication/login'
import { HOME, CART, LOGIN, REGISTER } from '../config/routes'
import Register from '../pages/authentication/register'
import ProductDetail from '../pages/product-detail'
import Cart from '../pages/user/cart'
import AuthPageLayout from '../layouts/AuthPageLayout'
import Profile from '../pages/user/profile'

const HomepageRoute = () => {
  // route that already login can't access
  const publicRoutes = [
    { path: LOGIN, element: <Login /> },
    { path: REGISTER, element: <Register /> },
  ]

  // auth route that need login to access
  const authRoute = [{ path: '/profile', element: <Profile /> }]

  return (
    <Routes>
      <Route element={<HomepageLayout />}>
        {/* everyone can access  */}
        <Route path={HOME} element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path={CART} element={<Cart />} />

        {/* Admin protected route */}
        <Route
          path="/admin/create-product"
          element={
            <AdminRoute>
              <CreateProduct />
            </AdminRoute>
          }
        />

        {/* Only for logged in user*/}
        {authRoute.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Route>

      {/* user already logged in cannot access routes */}
      <Route element={<AuthPageLayout />}>
        {publicRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<PublicRoute>{element}</PublicRoute>}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default HomepageRoute

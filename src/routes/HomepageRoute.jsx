import React from 'react'
import HomepageLayout from '../layouts/HomepageLayout'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/authentication/Login'
import Register from '../pages/authentication/Register'
import Homepage from '../pages/Homepage'
import CreateProduct from '../pages/admin/CreateProduct'
import ProtectedRoute from './ProtctedRoute'

const HomepageRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<HomepageLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin/create-product"
            element={
              <ProtectedRoute>
                <CreateProduct />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default HomepageRoute

import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuthUser from '../hooks/useAuthUser'

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuthUser()

  return isLoggedIn ? <Navigate to="/" replace /> : children
}

export default PublicRoute

import React from 'react'
import useAuthUser from '../hooks/useAuthUser'

const UserDetail = () => {
  const { user, isLoading } = useAuthUser()

  if (isLoading) return null

  return (
    <>
      <h1>{user?.name}</h1>
      <h1>{user?.role}</h1>
    </>
  )
}

export default UserDetail

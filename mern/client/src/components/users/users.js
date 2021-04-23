import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { Loader } from '../Loader'
import UsersList from './usersList'

export const Users = () => {
  const [user, setUsers] = useState([])
  const { request, loading } = useHttp()
  const { tokens } = useContext(AuthContext)

  const getUsers = useCallback(async () => {
    try {
      const data = await request('/users/all', 'GET', null, {
        Authorization: { tokens },
      })
      setUsers(data)
      console.log(data)
    } catch (e) {}
  }, [tokens, request])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <h1> users list</h1>
      {user.map((user) => (
        <UsersList user={user} key={user._id} />
      ))}
    </div>
  )
}

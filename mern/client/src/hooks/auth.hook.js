import { useState, useCallback, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
  const [tokens, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)

  const login = useCallback((tokens, userId) => {
    setToken(tokens, userId)
    setUserId(userId)

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId,
        tokens,
      })
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.tokens) {
      login(data.tokens, data.userId)
    }
    setReady(true)
  }, [login])

  return { login, logout, tokens, userId, ready }
}

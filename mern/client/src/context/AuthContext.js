import { createContext } from 'react'

function noop() {}

export const AuthContext = createContext({
  tokens: null,
  userId: null,
  login: noop,
  logout: noop,
  isAuthenticated: false,
})

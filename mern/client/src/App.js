import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useRoutes from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import { Navbar } from './components/NavBar'
import { Loader } from './components/Loader'

import 'materialize-css'

function App() {
  const { tokens, login, logout, userId, ready } = useAuth()
  const isAuthenticated = !!tokens
  const routes = useRoutes(isAuthenticated)

  if (!ready) {
    return <Loader />
  }

  return (
    <AuthContext.Provider
      value={{
        tokens,
        login,
        logout,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {isAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  )
}

export default App

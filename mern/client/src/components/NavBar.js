import React, { useContext } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = (getUsers) => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = (event) => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div
        className="nav-wrapper blue darken-1"
        style={{
          padding: '0 2rem',
        }}
      >
        <span className="brand-logo">SOCIAL NETWORK</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li style={{ margin: '0 5px' }}>
            <NavLink to={'/posts'}>
              <button>set post</button>
            </NavLink>
          </li>
          <li style={{ margin: '0 5px' }}>
            <NavLink to={'/users/all'}>
              <button>users</button>
            </NavLink>
          </li>
          <li style={{ margin: '0 5px' }}>
            <NavLink to={'/friends'}>
              <button>friends</button>
            </NavLink>
          </li>
          <li style={{ margin: '0 5px' }}>
            <button onClick={logoutHandler}>logout</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

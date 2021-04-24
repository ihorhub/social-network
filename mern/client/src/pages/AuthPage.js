import React, { useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { AuthContext } from '../context/AuthContext'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage()
  const { loading, request, error, clearError } = useHttp()
  const [form, setForm] = useState({
    name: '',
    surname: '',
    age: '',
    email: '',
    password: '',
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/users/register', 'POST', { ...form })
      message(data.message)
      console.log(data)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/auth/login', 'POST', { ...form })

      auth.login(data.access_token, data.userId)
    } catch (e) {}
  }

  return (
    <div className="row">
      <h1>SOCIAL NETWORK</h1>
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Registration</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Введіть name "
                  id="name"
                  type="text"
                  name="name"
                  className="yellow-input"
                  value={form.name}
                  onChange={changeHandler}
                />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введіть surname "
                  id="surname"
                  type="text"
                  name="surname"
                  className="yellow-input"
                  value={form.surname}
                  onChange={changeHandler}
                />
                <label htmlFor="surname">Surname</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введіть birth_age  "
                  id="age"
                  type="text"
                  name="age"
                  className="yellow-input"
                  value={form.age}
                  onChange={changeHandler}
                />
                <label htmlFor="name">Age 1984</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введіть email"
                  id="email"
                  type="email"
                  name="email"
                  className="yellow-input"
                  value={form.email}
                  onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Введіть пароль"
                  id="password"
                  type="password"
                  name="password"
                  className="yellow-input"
                  value={form.password}
                  onChange={changeHandler}
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="card-action">
                <button
                  className="btn yellow darken-4"
                  style={{ marginRight: 10 }}
                  disabled={loading}
                  onClick={loginHandler}
                >
                  Enter
                </button>
                <button
                  is
                  className="btn grey lighten-1 black-text"
                  onClick={registerHandler}
                  disabled={loading}
                >
                  Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

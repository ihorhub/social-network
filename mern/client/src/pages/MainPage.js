import React, { useEffect, useState, Fragment } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
// import axios from 'axios'

export const MainPage = () => {
  const message = useMessage()
  const { error, clearError, request } = useHttp()
  const [userFile, setUserFile] = useState('')

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeFormHandler = (e) => {
    setUserFile({ userFile, [e.target.name]: e.target.files[0] })
    console.log(e.target.name)
    console.log(userFile)
  }

  const sendFileHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', userFile)
    try {
      const data = await request('/users/upload', 'POST', formData, {
        'Content-Type': 'multipart/form-data',
      })
      //   const data = await axios.post('/users/upload', formData, {
      //     headers: { 'Content-Type': 'multipart/form-data' },
      //   })
      message(data.message)
      console.log(data)
      console.log(formData)
    } catch (e) {}
  }

  console.log({ userFile })

  return (
    <div>
      <h1>main page</h1>

      <div className="input-field">
        <Fragment>
          {' '}
          <form onSubmit={sendFileHandler}>
            <input
              placeholder="upload file"
              type="file"
              name="avatar"
              accept="image/*"
              className="yellow-input"
              onChange={changeFormHandler}
            />
            <button is className="btn grey lighten-1 black-text">
              upload avatar
            </button>
          </form>
        </Fragment>

        <hr />
      </div>
    </div>
  )
}

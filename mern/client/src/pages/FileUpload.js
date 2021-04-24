import React, { useEffect, useState, Fragment } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
// import axios from 'axios'

export const FileUpload = () => {
  const message = useMessage()
  const { error, clearError, request } = useHttp()
  const [userFile, setUserFile] = useState('')
  const [userFileName, setUserFileName] = useState('Chose File')

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeFormHandler = (e) => {
    setUserFile(e.target.files[0])
    setUserFileName(e.target.files[0].name)

    console.log(userFile)
    console.log(userFileName)
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
              id="customFile"
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
export default FileUpload

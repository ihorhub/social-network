import React, { useEffect, useState, Fragment } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import axios from 'axios'

export const FileUpload = () => {
  const message = useMessage()
  const { error, clearError } = useHttp()
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Chose File')
  // const [uploadedFile, setUploadedFile] = useState('Chose File')

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeFormHandler = (e) => {
    setFile(e.target.files[0])
    setFilename(e.target.files[0].name)

    console.log(file)
    console.log(filename)
  }

  const submitFileHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    try {
      // const res = await request('/users/upload', 'POST', formData, {
      //   'Content-Type': 'multipart/form-data',
      // })
      const res = await axios.post('/users/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      message(res.message)
      console.log(res)
      console.log(formData)
    } catch (e) {
      if (e.response.status === 500) {
        console.log('it was server problem')
      } else {
        console.log(e.response.data.message)
      }
    }
  }

  console.log({ file })

  return (
    <div>
      <h1>main page File Upload</h1>

      <div className="input-field">
        <Fragment>
          <form onSubmit={submitFileHandler}>
            <input
              id="customFile"
              placeholder="upload file"
              type="file"
              name="avatar"
              accept="image/*"
              className="yellow-input"
              onChange={changeFormHandler}
            />
            <label htmlFor="name">{filename}</label>
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

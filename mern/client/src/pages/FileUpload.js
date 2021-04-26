import React, { useEffect, useState, Fragment } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import Progress from '../components/Progress'
// import axios from 'axios'

export const FileUpload = () => {
  const message = useMessage()
  const { request, error, clearError } = useHttp()
  const [file, setFile] = useState('')
  const [filename, setFilename] = useState('Chose File')
  const [uploadedFile, setUploadedFile] = useState('Chose File')
  const [uploadPercentage, setUploadPercentage] = useState(0)

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
  }

  const submitFileHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('file', file)
    try {
      // const data = await request('/users/upload', 'POST', formData, {
      //   'Content-Type': 'multipart/form-data',
      // })
      const res = await axios.post('/users/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          )
          setTimeout(() => setUploadPercentage(0), 10000)
        },
      })
      const uploadPath = res.data
      setUploadedFile({ uploadPath })
      message(res.message)
    } catch (e) {}
  }

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
            <Progress percentage={uploadPercentage} />
          </form>
          {uploadedFile ? (
            <div className="row mt-5">
              <div className="col-md-6 m-auto">
                <h3 className="text-center">{uploadedFile.fileName}</h3>
                <img
                  style={{ width: '100%' }}
                  src={uploadedFile.filePath}
                  alt=""
                />
              </div>
            </div>
          ) : null}
        </Fragment>

        <hr />
      </div>
    </div>
  )
}

export default FileUpload

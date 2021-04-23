import React from 'react'

export const MainPage = () => {
  const changeHandler = () => {}

  return (
    <div>
      <h1>main page</h1>

      <div className="input-field">
        <input
          placeholder="upload file"
          type="file"
          name="picture"
          accept="image/*"
          className="yellow-input"
          //   value={files}
          onChange={changeHandler}
        />
        <label htmlFor="file">avatar</label>
      </div>
    </div>
  )
}

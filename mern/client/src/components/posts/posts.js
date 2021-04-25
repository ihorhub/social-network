import React, { useState, useEffect, useContext } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
// import { Loader } from '../Loader'
import { PostList } from './postList'

export const Posts = () => {
  const [form, setForm] = useState({ post: '' })
  const { request } = useHttp()

  const { tokens } = useContext(AuthContext)

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  console.log(form)
  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const onSubmitPost = async (e) => {
    e.preventDefault()
    try {
      const data = await request(
        '/users/post',
        'POST',
        { ...form },
        { Authorization: { tokens } }
      )
      console.log(data)
      console.log(form)
    } catch (e) {}
  }

  return (
    <div>
      <h1> My post</h1>
      <div></div>
      <div className="input-field">
        <input
          placeholder="Введіть surname "
          id="surname"
          type="text"
          name="post"
          className="yellow-input"
          value={form.post}
          onChange={changeHandler}
        />
        <label htmlFor="post">Post</label>
        <button
          className="btn yellow darken-4"
          style={{ marginRight: 10 }}
          onClick={onSubmitPost}
        >
          Enter Надіслати
        </button>
      </div>
      <div>
        {form.map((post, index) => (
          <PostList post={post} key={index} />
        ))}
      </div>
    </div>
  )
}

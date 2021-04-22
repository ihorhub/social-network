import React, {  useContext, useEffect, useState } from 'react'
import { useHttp } from '../../hooks/http.hook'
import { AuthContext } from '../../context/AuthContext'
import { Loader } from '../Loader'
// import PostList from './postList'

export const Posts = () => {
  
  const [userPost, setUserPost] = useState({
    post: ''   
  })
  const { request, loading } = useHttp()
  const { tokens } = useContext(AuthContext)

  const onPostChange = (event) => {
    setUserPost({ ...userPost, [event.target.name]: event.target.value })   
  }

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const addPost = async () => {
    try {
      const data = await request(
        '/users/post',
        'POST',
        { ...userPost },
        { Authorization: { tokens } }
      )
      console.log(data)
    } catch (e) {}
  }, 

  

  return (
    <div>
      <h1> My post</h1>
      {/* <div>
        {userPost.map((p) => (
          <PostList p={p} />
        ))}
      </div> */}
      <div className="input-field">
        <input
          placeholder="Введіть post "
          id="post"
          type="text"
          name="post"
          className="yellow-input"
          value={userPost}
          onChange={onPostChange}
        />
        <label htmlFor="post">Post</label>
      </div>
      <div>
        <button onClick={addPost}>ADD post</button>
      </div>
    </div>
  )
}

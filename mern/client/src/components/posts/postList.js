import React from 'react'
import { withRouter } from 'react-router'

const PostList = ({ p }) => {
  console.log(p)
  const addCommentToPost = () => {}
  return (
    <div>
      <div>
        <p> Post: {p.notes}-</p>
        <button onClick={() => addCommentToPost()}>writePost</button>
        <hr />
      </div>
    </div>
  )
}
export default withRouter(PostList)

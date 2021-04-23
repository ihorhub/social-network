import React from 'react'
import { withRouter } from 'react-router'

const PostList = ({ userPost }) => {
  console.log(userPost)
  //   const addCommentToPost = () => {}
  return (
    <div>
      <div>
        {userPost.map((p) => {
          return <div>Post--{p.post}</div>
        })}
        <hr />
      </div>
    </div>
  )
}
export default withRouter(PostList)

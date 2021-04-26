import React from 'react'
// import { withRouter } from 'react-router'

export const PostList = ({ form }) => {
  // console.log(post)
  //   const addCommentToPost = () => {}
  return (
    <div>
      <h1> this page render my post</h1>
      <div>
        <p> Post:--- {form.post}--</p>

        <hr />
      </div>
    </div>
  )
}
// export default withRouter(PostList)

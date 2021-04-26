import React from 'react'
import { withRouter } from 'react-router'

const UsersList = ({ user }) => {
  console.log(user)
  const addComment = () => {}

  return (
    <div>
      <div>
        <p> {user.id}-- </p>
        <p> name: {user.name}--</p>
        <p> surname: {user.surname}--</p>
        <p> age: {user.age}--</p>
        <p> Email: {user.email}-</p>
        {/* <p>
          Post:
          {user.post.forEach((item) => {
            ;<p>{item}</p>
          })}
        </p> */}
        <p> Post: {user.post}-</p>
        {/* <p> Post: {user.`${user.post}`}-</p> */}
        console.log(user)
        <button onClick={() => addComment()}>writeComment</button>
        <hr />
      </div>
    </div>
  )
}
export default withRouter(UsersList)

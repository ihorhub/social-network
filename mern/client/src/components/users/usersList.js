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
        <p> Comment: {user.notes}-</p>
        <button onClick={() => addComment()}>writeComment</button>
        <hr />
      </div>
    </div>
  )
}
export default withRouter(UsersList)

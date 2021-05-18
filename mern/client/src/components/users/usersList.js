import React from 'react'
import { withRouter } from 'react-router'
import {NavLink } from 'react-router-dom'


const UsersList = ({ user }) => {
 

  // let allPost=user.post
  // for(const posts in allPost){
  //   let ppp=allPost[posts]
  //   console.log(ppp)}
   
 
  
  return (   
     
    <div>
      <div>
        <p> {user._id}-- </p>
        <p> name: {user.name}--</p>
        <p> surname: {user.surname}--</p>
        <p> age: {user.age}--</p>
        <p> Email: {user.email}-</p>     
        <p> Post: {user.post}</p>         
        
        <NavLink to={'/users/posts'}>
        <button>writeComment</button>
        <hr />
            </NavLink>
      
      </div>
    </div>
  )
}
export default withRouter(UsersList)

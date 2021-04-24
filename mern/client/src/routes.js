import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Friends } from './components/friends/friends'
import { Posts } from './components/posts/posts'
import { Comments } from './components/comments/comments'
import { Users } from './components/users/users'
import { MainPage } from './pages/MainPage.js'
import { AuthPage } from './pages/AuthPage'

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/users" exact>
          <MainPage />
        </Route>

        <Route path="/friends" exact>
          <Friends />
        </Route>

        <Route path="/users/posts" exact>
          <Posts />
        </Route>
        <Route path="/users/all" exact>
          <Users />
        </Route>
        <Route path="/comments/:id">
          <Comments />
        </Route>

        <Redirect to="/users" />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}
export default useRoutes

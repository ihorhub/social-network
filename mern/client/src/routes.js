import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { friends } from './components/friends/friends'
import { posts } from './components/posts/posts'
import { comments } from './components/comments/comments'
import { users } from './components/users/users'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/friends" exact>
          <friends />
        </Route>
        <Route path="/posts" exact>
          <posts />
        </Route>
        <Route path="/users" exact>
          <users />
        </Route>
        <Route path="/comments/:id">
          <comments />
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

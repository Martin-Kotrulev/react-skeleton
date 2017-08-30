import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PetsList from '../pets/PetsList'
import Login from '../users/Login'
import Register from '../users/Register'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={PetsList} />
    <Route path='/users/login' component={Login} />
    <Route path='/users/register' component={Register} />
  </Switch>
)

export default Routes

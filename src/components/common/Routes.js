import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PetsList from '../pets/PetsList'
import Login from '../users/Login'
import Register from '../users/Register'
import PrivateRoute from './PrivateRoute'
import Logout from '../users/Logout'
import CreatePet from '../pets/CreatePet'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={PetsList} />
    <Route path='/users/login' component={Login} />
    <Route path='/users/register' component={Register} />
    <PrivateRoute path='/users/logout' component={Logout} />
    <PrivateRoute path='/pets/create' component={CreatePet} />
  </Switch>
)

export default Routes

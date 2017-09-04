import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Auth from '../../Auth'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <Link className='navbar-brand' to='/'>ReactSkeleton</Link>
            </div>
            <ul className='nav navbar-nav'>
              <li className='active'><Link to='/'>Home</Link></li>
            </ul>
            {Auth.isAuthenticated() ? (
              <ul className='nav navbar-nav navbar-right'>
                <li><Link to='/'><span className='glyphicon glyphicon-user' /> {Auth.getUser().name}</Link></li>
                <li><Link to='/users/logout'><span className='glyphicon glyphicon-log-in' /> Logout</Link></li>
              </ul>
            ) : (
              <ul className='nav navbar-nav navbar-right'>
                <li><Link to='/users/register'><span className='glyphicon glyphicon-user' /> Register</Link></li>
                <li><Link to='/users/login'><span className='glyphicon glyphicon-log-in' /> Login</Link></li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

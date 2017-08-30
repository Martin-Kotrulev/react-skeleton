import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand' href='#'>ReactSkeleton</a>
            </div>
            <ul className='nav navbar-nav'>
              <li className='active'><Link to='/'>Home</Link></li>
              <li><a href='#'>Page 1</a></li>
              <li><a href='#'>Page 2</a></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/users/register'><span className='glyphicon glyphicon-user' /> Register</Link></li>
              <li><Link to='/users/login'><span className='glyphicon glyphicon-log-in' /> Login</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar

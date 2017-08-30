import React from 'react'

const RegisterForm = (props) => (
  <div className='container'>
    <form onSubmit={props.onSubmit}>
      <div className='from-group'>
        <label htmlFor='name'>Username:</label>
        <input
          type='text'
          className='form-control'
          id='name'
          name='name'
          value={props.user.name}
          onChange={props.onChange} />
      </div>
      <div className='from-group'>
        <label htmlFor='email'>Email address:</label>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          value={props.user.email}
          onChange={props.onChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          value={props.user.password}
          onChange={props.onChange} />
      </div>
      <div className='form-group'>
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input
          type='password'
          className='form-control'
          id='confirmPassword'
          name='confirmPassword'
          value={props.user.confirmPassword}
          onChange={props.onChange} />
      </div>
      <button
        className='btn btn-default'>Submit</button>
    </form>
  </div>
)

export default RegisterForm

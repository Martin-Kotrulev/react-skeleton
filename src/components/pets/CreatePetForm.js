import React from 'react'
import Input from '../common/Input'

const CreatePetForm = (props) => (
  <div>
    <form onSubmit={props.onSubmit}>
      {props.error ? <h3>{props.error}</h3> : null}
      <div className='form-group'>
        <Input
          className='form-control'
          name='name'
          value={props.pet.name}
          onChange={props.onChange} 
          label='Pet Name' />
      </div>
      <div className='form-group'>
        <Input
          className='form-control'
          name='image'
          type='url'
          value={props.pet.image}
          onChange={props.onChange} 
          label='Pet Image' />
      </div>
      <div className='form-group'>
        <Input
          className='form-control'
          name='age'
          type='number'
          value={props.pet.age}
          onChange={props.onChange} 
          label='Pet Age' />
      </div>
      <div className='form-group'>
        <label
          htmlFor='type'>Type: </label>
        <select
          className='form-control'
          name='type'
          value={props.pet.type}
          onChange={props.onChange}>
          <option value=''></option>
          <option value='Cat'>Cat</option>
          <option value='Dog'>Dog</option>
          <option value='Other'>Other</option>
        </select>
      </div>
      <div className='form-group'>
        <Input
          className='form-control'
          name='breed'
          value={props.pet.breed}
          onChange={props.onChange} 
          label='Pet Breed' />
      </div>
      <button
        type='submit'
        className='btn btn-default'>Create Pet</button>
    </form>
  </div>
)

export default CreatePetForm

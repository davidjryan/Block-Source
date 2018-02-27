import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './ProjectForm.css'

export default class projectForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      goal: ''
    }
  }

  handleChange = (event) => {
    const target = event.target;
  }

  render() {
    return(
      <div className='project-form-container'>
        <div className='project-form'>
          <div className='input-labels'>
            <span className='project-input-label'>Title</span>
            <span className='project-input-label'>Description</span>
            <span className='project-input-label'>Goal</span>
          </div>
          <div className='project-inputs'>
            <input 
              name='title'
              type='text' 
              className='project-input single-input'
            />
            <textarea
              name='description'
              type='text' 
              className='project-input'
              placeholder='Why should people fund this project?'
            >
            </textarea>
            <input
              name='goal'
              type='text' 
              className='project-input single-input'
            />
        </div>
      </div>
        <RaisedButton label='default'/>
        <button className='button btn-create'>Create</button>
    </div>
    )
  }

}


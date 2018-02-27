import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';
import * as actions from '../../actions'
import PropTypes from 'prop-types'


export class Login extends Component {

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.props.inputChange(name, value)
  }

  render() {
    return (
      <div className='login-page'>
        <div className='login-inputs'>
          <input
            type='text'
            name='email'
            className='input-field'
            placeholder='Email'
            value={this.props.email || ''}
            />
          <input
            type='password'
            name='password'
            className='input-field'
            placeholder='Password'
            value={this.props.password || ''}
          />
          <button className='btn-sign-in'>Sign In</button>
        </div>

      </div>
    )
  }
}

export const mapStateToProps = store => {
  return {
    email: store.email,
    password: store.password
  }
}

export const mapDispatchToProps = dispatch => {
  return {

  }
}

Login.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
}

export default connect(mapStateToProps)(Login);
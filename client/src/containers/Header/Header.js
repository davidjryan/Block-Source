import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className='header-component'>
        <Link to='/create'>
          <button className='button'>Start a project</button>
        </Link>
        <Link to ='/'>
          <h1 className='app-title'>BlockSource</h1>
        </Link>
        <h4 className='app-subtitle'>Crowdfunding on the blockchain</h4>
        <div className='search-login-container'>
          <Search />
          <Link to ='/login' >
            <button className='button btn-login'>Sign in</button>
          </Link>
        </div>
      </div>
      </MuiThemeProvider>
    )
  }
}

export default Header;
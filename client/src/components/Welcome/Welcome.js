import React from 'react';
// import { Link } from 'react-router-dom';
import Projects from '../../containers/Projects/Projects';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome-page'>
      <Projects />
    </div>
    )
}

export default Welcome;
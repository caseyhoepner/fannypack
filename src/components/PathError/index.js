import React from 'react';
import { Link } from 'react-router-dom';

import './PathError.css';

const PathError = () => {
  return (
    <div className='pe-container'>
      <img className='pe-icon' src={require('../../assets/sad-page.svg')} />
      <h1 className='pe-text'>Uh oh! This page does not exist.</h1>
      <Link 
        className='pe-back-btn' 
        to="/">
        &#8592; Reroute to homepage
      </Link>
    </div>
  )
}

export default PathError;
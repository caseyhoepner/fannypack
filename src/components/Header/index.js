import React from 'react';
import jet from '../../assets/jet.svg';

import './Header.css'

const Header = () => {
  return (
    <div className='h-header-container'>
      <h1 className='h-title'>JetPack</h1>
      <img className='h-jet' src={jet} alt='Icon of a jet taking off.'/>
    </div>
  )
}

export default Header;
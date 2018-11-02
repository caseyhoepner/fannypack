import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='h-header-container'>
        <h1 className='h-title'>FannyPack</h1>
        <img className='h-fanny-pack' src={require('../../assets/fanny-pack-white.png')}/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, mapDispatchToProps)(Header);
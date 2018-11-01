import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.css'

export class Header extends Component {
  constructor() {
    super() 
    this.state = {
    }
  }

  render() {
    return (
      <div className='h-header-container'>
        <h1 clasaName='h-title'>FannyPack</h1>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(null, mapDispatchToProps)(Header);
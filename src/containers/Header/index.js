import React, { Component } from 'react';
import jet from '../../assets/jet.svg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='h-header-container'>
        <section className='h-title-section'>
        <h1 className='h-title'>JetPack</h1>
        <img className='h-jet' src={jet} alt='Icon of a jet taking off.'/>
        </section>
        <Link 
          className={this.props.isLoaded ? 'h-search-again' : 'hide'}
          to="/">
          Search Again
        </Link>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded
})

export default withRouter(connect(mapStateToProps)(Header));
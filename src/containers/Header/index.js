import React, { Component } from 'react';
import jet from '../../assets/jet.svg';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearState } from '../../actions';

import './Header.css'

export class Header extends Component {
  render() {
  const { clearState, isLoaded } = this.props;
    return (
      <div className='h-header-container'>
        <section className='h-title-section'>
        <h1 className='h-title'>JetPack</h1>
        <img className='h-jet' src={jet} alt='Icon of a jet taking off.'/>
        </section>
        <Link 
          className={isLoaded ? 'h-search-again' : 'hide'}
          to="/"
          onCLick={clearState}>
          Search Again
        </Link>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded
})

export const mapDispatchToProps = (dispatch) => ({
  clearState: () => dispatch(clearState())
})

export default withRouter(connect(mapStateToProps)(Header));
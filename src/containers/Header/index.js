import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import jet from '../../assets/jet.svg';
import { clearState, toggleLoaded } from '../../actions';

import './Header.css'

export class Header extends Component {
  render() {
    const { clearState, toggleLoaded, isLoaded } = this.props;
    const handleClick = () => {
      toggleLoaded(false);
      clearState();
    }

      return (
        <div className='h-header-container'>
          <section className='h-title-section'>
          <h1 className='h-title'>JetPack</h1>
          <img className='h-jet' src={jet} alt='Icon of a jet taking off.'/>
          </section>
          <Link 
            className={isLoaded ? 'h-search-again' : 'hide'}
            to="/"
            onClick={handleClick}>
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
  clearState: () => dispatch(clearState()),
  toggleLoaded: (bool) => dispatch(toggleLoaded(bool))
})

Header.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
  clearState: PropTypes.func.isRequired,
  toggleLoaded: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
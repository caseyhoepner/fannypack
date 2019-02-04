import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleLoaded, toggleErrored } from '../../actions';
import './FetchError.css';

const FetchError = (props) => {
  
  const handleClick = () => {
    const { toggleLoaded, toggleErrored } = this.props;

    toggleLoaded(false);
    toggleErrored(false);
  }

  return (
    <div className='fe-container'>
      <img 
        className='fe-icon'
        alt='icon'
        src={require('../../assets/warning.svg')}
      />
      <h1 className='fe-text'>Oops! Something went wrong.</h1>
        <p className='fe-secondary-text'>Be sure to submit valid city names.</p>
        <Link 
          className='fe-back-btn' 
          to="/"
          onClick={handleClick}
        >
          Try again
        </Link>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  toggleLoaded: (bool) => dispatch(toggleLoaded(bool)),
  toggleErrored: (bool) => dispatch(toggleErrored(bool))
})

FetchError.propTypes = {
  toggleLoaded: PropTypes.func.isRequired,
  toggleErrored: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(FetchError);
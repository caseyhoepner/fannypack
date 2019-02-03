import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleLoaded, toggleErrored } from '../../actions';
import './FetchError.css';

const FetchError = (props) => {
  const handleClick = () => {
    const { hasErrored, isLoaded } = this.props;
    toggleLoaded(false);
    toggleErrored(false);
  }

  return (
    <div>
      <h1>Opps! Something went wrong.</h1>
        <p>Be sure to submit valid city names.</p>
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

export default connect(null, mapDispatchToProps)(FetchError);
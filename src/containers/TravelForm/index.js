import React from 'react';
import { connect } from 'react-redux';

import './TravelForm.css'

const TravelForm = (props) => {
  return (
    <form>
      <input 
        placeholder='City'
      />
      <button>
        Get Packing List
      </button>
    </form>
    )
}

const mapDispatchToProps = (mapDispatchToProps) => {

} 

export default connect(null, mapDispatchToProps)(TravelForm);
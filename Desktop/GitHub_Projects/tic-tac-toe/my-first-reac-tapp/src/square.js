
import PropTypes from 'prop-types';
import React from 'react';

export const Square = (props) => {
   
    return (
       <button className="square" onClick={props.onClick}>
          {props.value}
       </button>
       
    );
    
}

Square.propTypes = {

    value: PropTypes.string,
    onClick: PropTypes.func
}
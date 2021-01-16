
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const Square = () => {
    const [ value, setValue ] = useState(null);
    
    return (
       <button className="square" onClick={() => setValue("X")}>
          {value}
       </button>
    )
}

Square.propTypes = {

    value: PropTypes.number
}
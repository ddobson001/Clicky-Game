import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

/* Destructure to get access to Card Props */
export default function Card({ 
  handleClick, 
  id, 
  type,
  height, 
  width
}) {
  return ( 
  <div 
    className={`flip-container`}
    onClick={() => handleClick(id)
    }
  >
    <div>
      <img
        style={{
          height, width,
        }}
    
        src={`/img/${type}.jpg`}
      />
    </div>
  </div>
  )
}

Card.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}
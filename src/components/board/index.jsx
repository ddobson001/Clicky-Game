import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'

import './styles.css'

export default function Board({dimension, cards, handleClick}) 
{
  return ( 
    <div className='board'>
      {/*itriate through card */}
      {cards.map(card => ( 
        <Card
        key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 4.5}
          height={dimension / 4.5}
          handleClick={() => handleClick(card.id)}
        />
      ))}
    </div>
  )
}

Board.propTypes = {
  dimension: PropTypes.number.isRequired,
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleClick: PropTypes.func.isRequired,   
}
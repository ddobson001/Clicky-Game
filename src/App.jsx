import React, { useState, useEffect } from 'react'
import Board from './components/board'

import initializeDeck from './deck'

export default function App() {
  const [cards, setCards] = useState([])
  const [dimension, setDimension] = useState(400)


  useEffect(() => {
    resizeBoard()
    setCards(initializeDeck())
  }, [])


  
  const handleClick = () => {
    setCards(initializeDeck())
  }

  const resizeBoard = () => {
    setDimension(Math.min(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    ),
    )
  }
  

  return (
    <div>
      <h1>Memory</h1>
      <h2>Can you remember where the cards are?</h2>
     <Board
     dimension = {dimension}
      cards={cards}
      handleClick={handleClick}
      />
    </div>
  )
}

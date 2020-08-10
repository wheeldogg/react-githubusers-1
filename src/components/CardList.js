import React from 'react'
import Card from './Card.js'

const CardList = props => (
  
  <div>
    {props.cards.map((card, index) => (
      <Card {...card} key={index} cards={props.cards} removeCard={props.removeCard}/>
    ))}
  </div>
)

export default CardList

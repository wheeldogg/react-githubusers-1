import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import CardList from './components/CardList'

const App = () => {

  const [cards, setCards] = useState([])

  const addCard = cardInfo => {
    console.log('add card')
    setCards(cards.concat(cardInfo))
  }

  function clearCards () {
    console.log('clear all cards')
    setCards([])
  }

  const removeCard = id => {
    console.log('remove card')
    const newCardList = cards.filter((item) => item.id !== id);
    setCards(newCardList);
  }

  return (
    <div>
      <Form onSubmit={addCard} />
      <button  type="button" onClick={() => clearCards()}>
        Clear all cards
      </button>
      <CardList cards={cards} removeCard={removeCard}/>    
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

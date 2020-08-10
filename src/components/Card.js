import React from 'react'

const Card = props => {
  // console.log(removeCard)
  // const [CardstoDelete, setCardstoDelete] = useState([])

  // const addCard = d => {
  //   console.log(cardInfo)
  //   setCards(cards.concat(cardInfo))
  // }

  // console.log(props.cards)

  // function handleRemove(id) {
  //   console.log(id);
  //   console.log(props.cards)

    // const [countList, setCountList] = useState([]);

    // remove item
    // const { users } = this.state;
    // users.splice(users.indexOf(user), 1);

    // this.setState({
    //   users
    // });
  // }

  return (
    <div style={{ margin: '1em' }}>
      <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
      <div>
        <div style={{ fontWeight: 'bold' }}>{props.name}</div>
        <div>{props.blog}</div>
        <a href={props.html_url}>Github handle</a>
      </div>
      <button type="button" onClick={() => props.removeCard(props.id)}>
          Remove card
      </button>
    </div> 
  )
}

     // <button type="button" onClick={() => removeCard(props.id)}>
       //   Remove card
      //</button>

export default Card

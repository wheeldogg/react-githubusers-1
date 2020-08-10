import React, { useState } from 'react'
import axios from 'axios'

const Form = props => {
  const [username, setUsername] = useState('')
  
  console.log(username)

  const handleSubmit = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`).then(resp => {
      props.onSubmit(resp.data)
      setUsername('wheeldogg')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="Enter Github username"
        required
      />

      <button type="submit" value='add'>Add card</button>
    </form>

  )
}

// third challenge

// <input type="text" value={username} onKeyPress={this.handleKeyPress} />

//add search on every keypress

// add on hover

export default Form

import React from 'react'
import germoglio from '../img/germoglio.jpg'

const Card = ({id, name, claim, philosopher}) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
      <h1>{name}</h1>
      <h3>Total confirmed:</h3>
      <p>{claim}</p>
      <h3>New cases:</h3>
      <p>{philosopher}</p>
    </div>
  )
}

export default Card

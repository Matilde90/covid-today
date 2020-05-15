import React from 'react'
import germoglio from '../img/germoglio.jpg'

const Card = ({id, name, claim, philosopher}) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
      <h1>{name}</h1>
      <img
        src={germoglio}
        alt='germoglio'
        height='200'
        width='150'
        className='center'
      />
      <h3>Main claim:</h3>
      <p>{claim}</p>
      <h3>Philosopher:</h3>
      <p>{philosopher}</p>
    </div>
  )
}

export default Card

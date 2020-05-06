import React from 'react'
import germoglio from './img/germoglio.jpg'

const Card = (props) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
      <h1>{props.name}</h1>
      <img
        src={germoglio}
        alt='germoglio'
        height='200'
        width='150'
        className='center'
      />
      <p>{props.claim}</p>
      <p>{props.philosopher}</p>
    </div>
  )
}

export default Card

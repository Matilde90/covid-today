import React from 'react'
import germoglio from './img/germoglio.jpg'

const Card = () => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
      <h1> Cognitivists Theory</h1>
      <img
        src={germoglio}
        alt='germoglio'
        height='200'
        width='150'
        className='center'
      />
      <p> Emotions are thoughts</p>
    </div>
  )
}

export default Card

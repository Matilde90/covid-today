import React from 'react'
import germoglio from '../img/germoglio.jpg'

const Card = ({date, countryName, totalConfirmed, totalDeaths, newDeaths, newConfirmed}) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
      <h1>{countryName}</h1>
      <h3>Total confirmed:</h3>
      <p>{totalConfirmed}</p>
      <h3>New cases:</h3>
      <p>{newConfirmed}</p>
      <h3>New deaths:</h3>
      <p>{newDeaths}</p>
      <h3>Total deaths:</h3>
      <p>{totalDeaths}</p>
    </div>
  )
}

export default Card

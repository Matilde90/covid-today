import React from 'react'

const Card = ({id, countryName, totalConfirmed, totalDeaths, newDeaths, newConfirmed, countryCode}) => {

  return (
    <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-7'>
      <h1>{countryName}</h1>
      <img src={`https://www.countryflags.io/${countryCode}/shiny/64.png`}></img>
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

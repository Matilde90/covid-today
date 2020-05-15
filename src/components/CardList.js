import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
    return (
        <div>
            {
                countries.map((country, i) => {
                    return <Card
                        key={i}
                        id={country.Country}
                        name={country.Country}
                        claim={country.newConfirmed}
                        philosopher={country.TotalConfirmed} 
                        />
                })
            }
        </div>
    )
}

export default CardList;
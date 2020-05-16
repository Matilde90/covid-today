import React from 'react';
import Card from './Card';

const CardList = ({ countries }) => {
    return (
        <div>
            {
                countries.map((country, i) => {
                    return <Card
                        key={i}
                        countryName={country.Country}
                        totalConfirmed={country.TotalConfirmed}
                        newConfirmed={country.NewConfirmed}
                        newDeaths={country.NewDeaths}
                        totalDeaths={country.TotalDeaths}
                        countryCode={country.CountryCode}
                        />
                })
            }
        </div>
    )
}

export default CardList;
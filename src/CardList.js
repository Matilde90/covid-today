import React from 'react';
import Card from './Card';

const CardList = ({ theories }) => {
    return (
        <div>
            {
                theories.map((theory, i) => {
                    return <Card
                        key={i}
                        id={theory.id}
                        name={theory.name}
                        claim={theory.claim}
                        philosopher={theory.philosopher} 
                        />
                })
            }
        </div>
    )
}

export default CardList;
import React from 'react';
import Card from './Card';
import { theories } from './theories.js';


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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Card from './Card';
import {theories} from './theories.js'

ReactDOM.render(<div>
                    <Card id={theories[0].id} name={theories[0].name} claim={theories[0].claim} philosopher={theories[0].philosopher}/> 
                    <Card id={theories[1].id} name={theories[1].name} claim={theories[1].claim} philosopher={theories[1].philosopher}/> 
                    <Card id={theories[2].id} name={theories[2].name} claim={theories[2].claim} philosopher={theories[2].philosopher}/>
                    <Card id={theories[3].id} name={theories[3].name} claim={theories[3].claim} philosopher={theories[3].philosopher}/>
                </div>
, document.getElementById('root'));


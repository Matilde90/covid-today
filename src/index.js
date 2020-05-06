import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import {theories} from './theories.js';
import CardList from './CardList.js'

ReactDOM.render(<div>
<CardList theories={theories}/>
                </div>
, document.getElementById('root'));


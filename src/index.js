import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import 'tachyons';
import {searchCountry} from './reducer'
import App from './containers/App';

const store = createStore(searchCountry);

ReactDOM.render(<div>
<App/>
                </div>
, document.getElementById('root'));

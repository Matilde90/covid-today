import React from 'react';
import CardList from './CardList';
import {theories} from './theories.js';
import SearchBox from './SearcBox';

const App = () => {
    return (
        <div>
        <h1>Theory</h1>
        <SearchBox />
        <CardList theories={theories}/>
        </div>
    );
}

export default App;
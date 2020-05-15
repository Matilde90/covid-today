import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input
                type='search'
                placeholder='search a country'
                className='pa3 bab--green bg-lightest-blue'
                onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;
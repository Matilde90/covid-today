import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                type='search'
                placeholder='search a theory of emotion'
                className='pa3 bab--green bg-lightest-blue'
                onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;
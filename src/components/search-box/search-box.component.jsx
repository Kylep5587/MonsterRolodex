import React from 'react';

import './search-box.styles.css';

// Functional component - does not have access to state or lifecycle methods
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search' 
        placeholder={ placeholder }
        onChange={ handleChange } />
    
);
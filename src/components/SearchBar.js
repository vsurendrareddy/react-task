// components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchUsers } from '../actions/userActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchUsers(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;

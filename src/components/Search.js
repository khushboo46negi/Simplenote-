import React from 'react';
import { SearchWrapper } from '../styles/Search.styles';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <SearchWrapper
      type="text"
      placeholder="Search Notes"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Search;

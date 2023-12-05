
// SearchBox.js
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    // You can perform search-related logic here
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder={placeholder}
        onChange={handleSearch}
        aria-label="Search"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">Search</Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBox;

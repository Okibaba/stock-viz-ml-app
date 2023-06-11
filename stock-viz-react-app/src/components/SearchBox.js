import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`User searched for: ${searchTerm}`);
    // Add your own logic to handle the search term here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', width: '50%', marginLeft: '20px', paddingRight: '10px', marginBottom: '20px' }}>
        <Input
          type="text"
          placeholder="Symbol/Name"
          value={searchTerm}
          onChange={handleChange}
        />
        <Button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </form>
  );
};

export default SearchBox;

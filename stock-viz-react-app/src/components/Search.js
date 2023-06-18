// components/Search.js
import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { fetchDailyStock } from '../features/stocks/stockSlice';

const Search = ({ setSymbol }) => {

  const [input, setInput] = useState(''); 
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSymbol(input);
    dispatch(fetchDailyStock(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', width: '50%', marginLeft: '20px', paddingRight: '10px', marginBottom: '20px' }}>
        <Input
          type= "text"
          placeholder="Enter ticker symbol"
          value={input}
          onChange={handleChange}
        />
        <Button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </form>
  );
};

export default Search;
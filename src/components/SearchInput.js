/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { getPhotos } from '../request/api';

function SearchInput() {
  const history = useHistory();

  const [value, setValue] = useState('');

  const suggestions = [
    { name: 'Poland' },
    { name: 'Polar bear' },
    { name: 'Police' },
    { name: 'Spain' },
    { name: 'Apple' },
    { name: 'Flag' },
    { name: 'Music' },
    { name: 'Computer' },
    { name: 'Programmig' },
    { name: 'Animals' },
    { name: 'Army' },
    { name: 'Woman' },
    { name: 'Wedding' },
    { name: 'Office' },
    { name: 'Mountain' },
    { name: 'Beach' },
    { name: 'Lake' },
    { name: 'Waterfalls' },
  ];

  const filteredSuggestions = suggestions.filter((suggestion) => (
    suggestion.name.toLowerCase().includes(value.toLowerCase())));

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getResults = async (e, name) => {
    e.preventDefault();

    const results = await getPhotos(value, name);

    history.push(results);
    setValue('');
  };

  return (
    <>
      <form onSubmit={getPhotos} className="search">
        <TextField id="outlined-basic" label="Search free high-resolution photos" variant="outlined" value={value} onChange={handleChange} autoComplete="off" />
        <Button variant="contained" color="primary" type="submit">Search</Button>
        {value.length > 2 ? (
          <ul className="autocomplete">
            {filteredSuggestions.length === 0 ? (
              <li>
                Brak
              </li>
            ) : filteredSuggestions.map((suggestion, index) => (
              <li key={index} onClick={(e) => getResults(e, suggestion.name)}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        ) : '' }
      </form>
    </>
  );
}

export default SearchInput;

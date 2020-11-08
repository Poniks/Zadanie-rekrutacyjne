/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';

function SearchInput() {
  const history = useHistory();

  const [state, setState] = useState({
    value: '',
  });

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
    suggestion.name.toLowerCase().includes(state.value.toLowerCase())));

  const handleChange = (e) => {
    setState({
      ...state,
      value: e.target.value,
    });
  };

  const getPhotos = (e, name) => {
    e.preventDefault();

    axios.get(`https://api.unsplash.com/search/photos/?query=${!name ? state.value : name}&client_id=fbWKJHeHzYm5bcbbN1Q08wtGdxe4EXZGheW1hVUDhA0`)
      .then((res) => {
        let location;
        if (!name) {
          location = {
            pathname: `/photos/${state.value}`,
            state: {
              keyword: state.value,
              data: res.data,
            },
          };
        } else {
          location = {
            pathname: `/photos/${name}`,
            state: {
              keyword: name,
              data: res.data,
            },
          };
        }

        history.push(location);
        setState({
          ...state,
          value: '',
        });
      });
  };

  return (
    <>
      <form onSubmit={getPhotos} className="search">
        <TextField id="outlined-basic" label="Search free high-resolution photos" variant="outlined" value={state.value} onChange={handleChange} autoComplete="off" />
        <Button variant="contained" color="primary" type="submit">Search</Button>
        {state.value.length > 2 ? (
          <ul className="autocomplete">
            {filteredSuggestions.length === 0 ? (
              <li>
                Brak
              </li>
            )
              : filteredSuggestions.map((suggestion, index) => (
                <li key={index} onClick={(e) => getPhotos(e, suggestion.name)}>
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

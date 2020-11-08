/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';
import ShowDetails from './ShowDetails';

function Second(props) {
  const { location } = props;
  const { keyword, data } = location.state;

  return (
    <div className="second">
      <SearchInput />
      <h2>{keyword}</h2>
      <div className="results">
        {data.results.map((result, index) => (
          <div key={index} className="photo">
            <ShowDetails result={result} />
          </div>
        ))}
      </div>
    </div>
  );
}

Second.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Second;

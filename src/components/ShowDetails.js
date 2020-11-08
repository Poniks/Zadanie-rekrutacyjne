/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Avatar, Typography } from '@material-ui/core';
import axios from 'axios';

function ShowDetails({ result }) {
  const [open, setOpen] = useState(false);

  const [state, setState] = useState({
    location: '',
  });

  const handleDialog = () => {
    if (!open) {
      axios.get(`https://api.unsplash.com/photos/${result.id}/?client_id=fbWKJHeHzYm5bcbbN1Q08wtGdxe4EXZGheW1hVUDhA0`)
        .then((res) => {
          setState({
            ...state,
            location: res.data.location.title,
          });
        });
    }
    setOpen(!open);
  };

  return (
    <>
      <img src={result.urls.small} alt="" onClick={handleDialog} />
      <Dialog
        open={open}
        onClose={handleDialog}
        maxWidth="lg"
      >
        <div className="text-content">
          <Avatar alt="Remy Sharp" src={result.user.profile_image.small} />
          <div>
            <Typography variant="body1" gutterBottom>
              {result.user.name}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              @
              {result.user.username}
            </Typography>
          </div>
        </div>
        <img src={result.urls.regular} alt="" />
        <Typography variant="caption" display="block" gutterBottom>
          {state.location}
        </Typography>
      </Dialog>
    </>
  );
}

ShowDetails.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ShowDetails;

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Avatar, Typography } from '@material-ui/core';
import { getPhotoLocation } from '../request/api';

function ShowDetails({ result }) {
  const [open, setOpen] = useState(false);

  const [location, setLocation] = useState('');

  const handleDialog = async () => {
    if (!open) {
      const photoLocation = await getPhotoLocation(result.id);
      setLocation(photoLocation);
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
          {location}
        </Typography>
      </Dialog>
    </>
  );
}

ShowDetails.propTypes = {
  result: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ShowDetails;

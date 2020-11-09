import axios from 'axios';

export const getPhotoLocation = (id) => (
  axios.get(`https://api.unsplash.com/photos/${id}/?client_id=fbWKJHeHzYm5bcbbN1Q08wtGdxe4EXZGheW1hVUDhA0`)
    .then((res) => res.data.location.title)
    .catch((err) => console.error(err)));

export const getPhotos = (value, name) => axios.get(`https://api.unsplash.com/search/photos/?query=${!name ? value : name}&client_id=fbWKJHeHzYm5bcbbN1Q08wtGdxe4EXZGheW1hVUDhA0`)
  .then((res) => {
    let location;
    if (!name) {
      location = {
        pathname: `/photos/${value}`,
        state: {
          keyword: value,
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
    return location;
  })
  .catch((err) => console.error(err));

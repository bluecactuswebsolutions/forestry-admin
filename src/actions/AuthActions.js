import axios from 'axios';

const base_url = 'http://localhost:9000/api';

export function login(payload) {
  return axios.post(`${base_url}/login`, payload)
    .then(() => {
      localStorage.setItem('user', true);
    })
    .catch((err) => {
      console.error(err.response || err);
    });
}

export function fetchUsers() {
  return axios.get(`${base_url}/users`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err.response || err);
      return err;
    });
}

export function fetchUser(id) {
  return axios.get(`${base_url}/users/${id}`)
    .then((response) => {
      return response.data[0];
    })
    .catch((err) => {
      console.error(err.response || err);
      return err;
    });
}

export function patchUser(id) {
  return axios.patch(`${base_url}/users/${id}`)
    .then((response) => {
      return response.data[0];
    })
    .catch((err) => {
      console.error(err.response || err);
      return err;
    });
}

export function uploadAvatar(image, filename) {
  const payload = {
    image,
    filename,
  };
  return axios.post(`${base_url}/upload`, payload)
    .then((response) => {
      return response;
    });
}

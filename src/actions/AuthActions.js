import axios from 'axios';

export function login(payload) {
  return axios.post('http://localhost:9000/api/login', payload)
    .then(() => {
      localStorage.setItem('user', true);
      location.replace('/test'); // eslint-disable-line
    })
    .catch((err) => {
      console.error(err.response || err); // eslint-disable-line no-console
    });
}

export function fetchUsers() {
  return axios.get('http://localhost:9000/api/users')
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.error(err.response || err); // eslint-disable-line no-console
      return err;
    });
}

export function fetchUser(id) {
  return axios.get(`http://localhost:9000/api/users/${id}`)
    .then((response) => {
      return response.data[0];
    })
    .catch((err) => {
      console.error(err.response || err); // eslint-disable-line no-console
      return err;
    });
}

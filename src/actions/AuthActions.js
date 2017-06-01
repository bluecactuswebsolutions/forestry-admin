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
      console.log('response : ', response);
      return response.data;
    })
    .catch((err) => {
      console.error(err.response || err); // eslint-disable-line no-console
      return err;
    });
}

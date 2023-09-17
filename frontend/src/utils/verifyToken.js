import api from '../service/api';

const verifyToken = async () => {
  const token = JSON.parse(localStorage.getItem('token')) || false;
  if (!token) throw new Error('error');
  return api
    .post('/verify', token)
    .then((response) => response.data)
    .catch(() => { throw new Error('error'); });
};

export default verifyToken;

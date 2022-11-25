import axios from 'axios';

const API_URL = 'http://localhost:3000';

const authenticateUser = async (username, password) => {
  return await axios.post(`${API_URL}/api/authenticate`, {
    username,
    password,
  });
};

const fetchUser = async () => {
  return await axios.get(`${API_URL}/api/user`);
};

const updateUser = async (user) => {
  return await axios.put(`${API_URL}/api/user`, user);
};

const deleteUser = async (user) => {
  return await axios.delete(`${API_URL}/api/user`, user);
};

export default {
  authenticateUser,
  fetchUser,
  updateUser,
  deleteUser,
};

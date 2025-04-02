import axios from 'axios';

const API_URL = "https://c1s4i0-8080.bytexl.dev/api/users";

const getAllTrainers = async () => {
  const response = await axios.get(`${API_URL}/trainers`);
  return response.data;
};

const getUserById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getAllTrainers,
  getUserById
};
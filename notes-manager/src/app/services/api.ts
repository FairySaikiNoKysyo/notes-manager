import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 


export const createTopic = async (data: { name: string; parentTopic?: string }) => {
  const response = await axios.post(`${API_URL}/topics`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return response.data;
};


export const getTopics = async () => {
  const response = await axios.get(`${API_URL}/topics`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return response.data;
};


export const createNote = async (data: { topicId: string; content: string }) => {
  const response = await axios.post(`${API_URL}/notes`, data, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return response.data;
};


export const getNotes = async (topicId: string) => {
  const response = await axios.get(`${API_URL}/notes/${topicId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  });
  return response.data;
};
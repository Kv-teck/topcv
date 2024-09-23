import axios from 'axios';

const API_URL = 'https://localhost:5208/api/users'; // Thay đổi theo URL của backend của bạn

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
};

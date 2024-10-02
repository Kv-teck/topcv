import axios from 'axios';

// Define the base URL for your API
const API_URL = 'https://localhost:5208/api'; // Ensure this is the correct backend URL

// Function to register a user
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        // Handle error: throw an error message based on API response or a general failure message
        throw error.response ? error.response.data : 'Đăng ký thất bại. Vui lòng thử lại sau.';
    }
};

// Function to login a user
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        // Handle error similarly to registration
        throw error.response ? error.response.data : 'Đăng nhập thất bại. Vui lòng thử lại sau.';
    }
};

// Function to get a list of members
export const getMembers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`); // Ensure the endpoint is correct
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi lấy danh sách thành viên.';
    }
};

// Function to get detailed information about a member
export const getMemberById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`); // Ensure the endpoint is correct
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi lấy thông tin thành viên.';
    }
};

// Function to add a new member
export const addMember = async (memberData) => {
    try {
        const response = await axios.post(`${API_URL}/members`, memberData); // Ensure the endpoint is correct
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi thêm thành viên.';
    }
};

// Function to update member information
export const updateMember = async (id, memberData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`, memberData); // Ensure the endpoint is correct
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi cập nhật thông tin thành viên.';
    }
};


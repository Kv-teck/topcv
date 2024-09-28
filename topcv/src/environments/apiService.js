import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://localhost:5208/api'; // Replace with your actual backend URL

// Cấu hình axios để thêm token vào headers
const getAuthHeaders = () => {
    const token = localStorage.getItem('authToken');
    return {
        Authorization: `Bearer ${token}`,
    };
};

// Cấu hình axios với interceptor để tự động thêm headers cho tất cả các request
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Hàm đăng ký người dùng
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/Account/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Đăng ký thất bại. Vui lòng thử lại sau.';
    }
};

// Hàm đăng nhập người dùng
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/Account/login`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Đăng nhập thất bại. Vui lòng thử lại sau.';
    }
};

// Lấy danh sách các member
export const getMembers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi lấy danh sách thành viên.';
    }
};

// Hàm lấy thông tin chi tiết của một member
export const getMemberById = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/users/${username}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi lấy thông tin thành viên.';
    }
};

// Hàm cập nhật thông tin thành viên
export const updateMember = async (user) => {
    try {
        const response = await axios.put(`${API_URL}/users/${user.userName}`, user);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi cập nhật thông tin thành viên.';
    }
};

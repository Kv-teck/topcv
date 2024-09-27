import axios from 'axios';

const API_URL = 'https://localhost:5208/api'; // Thay URL này thành URL thực tế của backend của bạn

// Hàm đăng ký người dùng
export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/Account/register`, userData);
        return response.data;
    } catch (error) {
        // Xử lý lỗi: nếu API trả về lỗi, ném ra thông báo lỗi từ phản hồi API hoặc lỗi chung
        throw error.response ? error.response.data : 'Đăng ký thất bại. Vui lòng thử lại sau.';
    }
};

// Hàm đăng nhập người dùng
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/Account/login`, userData);
        return response.data;
    } catch (error) {
        // Xử lý lỗi: tương tự với đăng ký
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

// Lấy thông tin chi tiết của một member
export const getMemberById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi lấy thông tin thành viên.';
    }
};

// Thêm một member mới
export const addMember = async (memberData) => {
    try {
        const response = await axios.post(`${API_URL}/members`, memberData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi thêm thành viên.';
    }
};

// Cập nhật thông tin member
export const updateMember = async (id, memberData) => {
    try {
        const response = await axios.put(`${API_URL}/users/${id}`, memberData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : 'Lỗi khi cập nhật thông tin thành viên.';
    }
};

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { register } from '../environments/apiService';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isAgreed, setIsAgreed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Kiểm tra mật khẩu và xác nhận mật khẩu có khớp không
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Mật khẩu không khớp.");
            return;
        }

        const payload = {
            userName: formData.userName,


            password: formData.password,


            name: formData.name,
            email: formData.email,
        };

        try {
            // Gọi hàm register từ API và truyền dữ liệu form
            const response = await register(payload);

            // Nếu đăng ký thành công, lưu token và điều hướng người dùng
            if (response.token) {
                localStorage.setItem('authToken', response.token);
                alert('Đăng ký thành công!');
                navigate('/login');
            }
        } catch (error) {
            // Xử lý lỗi từ API
            if (error.message) {
                console.log("Lỗi từ API:", error.message);
                setErrorMessage(error.message || 'Đăng ký thất bại. Vui lòng kiểm tra thông tin.');
            } else {
                setErrorMessage('Lỗi kết nối hoặc hệ thống. Vui lòng thử lại sau.');
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
                    Chào mừng bạn đến với TopCV
                </h2>
                <p className="text-center mb-6">
                    Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Họ tên */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập họ tên"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="email"  // Use type email for validation
                            name="email"  // Change to match state
                            placeholder="Nhập email"
                            value={formData.email}  // Change here
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                            required
                        />
                    </div>

                    {/* Tên đăng nhập */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="text"
                            name="userName"  // Change here
                            placeholder="Tên đăng nhập"
                            value={formData.userName}  // Change here
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                            required
                        />
                    </div>

                    {/* Mật khẩu */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                            required
                        />
                    </div>

                    {/* Xác nhận mật khẩu */}
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Nhập lại mật khẩu"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                            required
                        />
                    </div>

                    {/* Điều khoản dịch vụ */}
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            className="mr-2 mt-1"
                            checked={isAgreed}
                            onChange={() => setIsAgreed(!isAgreed)}
                            required
                        />
                        <p className="text-sm">
                            Tôi đã đọc và đồng ý với{" "}
                            <a href="#" className="text-green-500 underline">Điều khoản dịch vụ</a> {" "}
                            và {" "}
                            <a href="#" className="text-green-500 underline">Chính sách bảo mật</a>
                            {" "} của TopCV
                        </p>
                    </div>

                    {/* Nút Đăng ký */}
                    <button
                        type="submit"
                        className={`w-full ${formData.password && formData.confirmPassword && formData.userName && formData.name && isAgreed
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-gray-400 cursor-not-allowed'
                            } text-white rounded-md py-2 font-semibold`}
                        disabled={
                            !(formData.password && formData.confirmPassword && formData.userName && formData.name && isAgreed)
                        }
                    >
                        Đăng ký
                    </button>

                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;

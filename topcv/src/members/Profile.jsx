import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMemberById } from '../environments/apiService'; // Đảm bảo import đúng đường dẫn

const Profile = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Thêm state cho loading
    const [error, setError] = useState(null); // Thêm state cho lỗi
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            const username = localStorage.getItem('username'); // Lấy username từ local storage
            if (!username) {
                navigate('/login'); // Redirect nếu không có username
                setIsLoading(false); // Kết thúc loading
                return;
            }
            try {
                const userData = await getMemberById(username); // Gọi hàm lấy dữ liệu
                setUser(userData);
            } catch (error) {
                console.error('Lỗi khi lấy thông tin người dùng:', error);
                setError('Có lỗi xảy ra khi lấy thông tin người dùng. Vui lòng thử lại.'); // Cập nhật thông báo lỗi
                navigate('/login'); // Redirect nếu có lỗi
            } finally {
                setIsLoading(false); // Kết thúc loading
            }
        };

        fetchUserData();
    }, [navigate]);

    if (isLoading) 
        return (
            <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
                <div className="animate-spin h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ); // Trạng thái loading

    if (error) // Kiểm tra lỗi và hiển thị thông báo
        return (
            <div className="container mx-auto p-4">
                <p className="text-red-500">{error}</p>
            </div>
        );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-4">Thông tin cá nhân</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Chi tiết người dùng</h2>
                    <p><strong>Tên: </strong>{user.name}</p>
                    <p><strong>Email: </strong>{user.email}</p>
                    <p><strong>Số điện thoại: </strong>{user.phoneNumber}</p>
                    <p><strong>Địa chỉ: </strong>{user.city}, {user.country}</p>
                    <p><strong>Giới tính: </strong>{user.gender}</p>
                    <p><strong>Tiêu đề hồ sơ: </strong>{user.profileTitle}</p>
                    <p><strong>Giới thiệu: </strong>{user.introduction}</p>
                </div>
                {/* Các thông tin khác (kinh nghiệm, giáo dục,...) */}
            </div>
        </div>
    );
};

export default Profile;

import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMemberById } from '../environments/apiService';
import Context from '../context/context';
import { ACTION } from '../context/reducer';

const Profile = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Context);
    const { user, isLoading } = state; // Lấy user và isLoading từ context state

    useEffect(() => {
        const fetchUserData = async () => {
            const username = localStorage.getItem('username'); // Lấy username từ local storage
            if (!username) {
                navigate('/login'); // Redirect nếu không có username
                return;
            }

            dispatch({ type: ACTION.SHOW_LOADING }); // Hiển thị loading khi bắt đầu lấy dữ liệu
            try {
                // Giả lập thời gian loading
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Thời gian giả lập 1 giây
                const userData = await getMemberById(username); // Gọi hàm lấy dữ liệu
                dispatch({ type: ACTION.SET_USER, payload: userData }); // Cập nhật user vào context
            } catch (error) {
                console.error('Lỗi khi lấy thông tin người dùng:', error);
                navigate('/login'); // Redirect nếu có lỗi
            } finally {
                dispatch({ type: ACTION.HIDE_LOADING }); // Ẩn loading khi kết thúc
            }
        };

        fetchUserData();
    }, [navigate, dispatch]);

    // Hiển thị hiệu ứng loading
    if (isLoading) return <div>Loading...</div>; // Trạng thái loading

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

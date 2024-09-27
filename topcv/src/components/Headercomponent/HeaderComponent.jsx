import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
  const username = localStorage.getItem('username'); // Get username from local storage
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove token
    localStorage.removeItem('username'); // Remove username
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="bg-white border-b shadow-md">
      <div className="px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://static.topcv.vn/v4/image/logo/topcv-logo-6.png"  // Logo link
              alt="logo"
              className="h-20 w-auto"
            />
          </Link>
          {/* Menu links */}
          <div className="hidden md:flex space-x-10 pl-8">
            <Link to="/job" className="text-green-600 font-semibold hover:text-green-600">Việc làm</Link>
            <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Hồ sơ & CV</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Công ty</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Công cụ</a>
            <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Cẩm nang nghề nghiệp</a>
          </div>
        </div>

        {/* Notification & Profile section */}
        <div className="flex items-center space-x-4">
          {username ? (
            <>
              <span className="text-gray-800">Xin chào, {username}!</span> {/* Display username */}
              <Link to="/profile" className="bg-blue-600 text-white px-4 py-2 font-semibold rounded hover:bg-blue-700">
                Hồ Sơ
              </Link> {/* Profile button */}
              <button 
                onClick={handleLogout} 
                className="bg-red-600 text-white px-4 py-2 font-semibold rounded hover:bg-red-700"
              >
                Đăng xuất
              </button>
              <div className="flex items-center space-x-4">
                <button className="bg-gray-800 text-white px-4 py-2 font-semibold rounded hover:bg-gray-900">
                  Đăng tuyển & tìm hồ sơ
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="border border-green-600 text-green-600 px-4 py-2 font-semibold rounded hover:bg-green-100">
                Đăng nhập
              </Link>
              <Link to="/register" className="bg-green-600 text-white px-4 py-2 font-semibold rounded hover:bg-green-700">
                Đăng ký
              </Link>
              <button className="bg-gray-800 text-white px-4 py-2 font-semibold rounded hover:bg-gray-900">
                Đăng tuyển & tìm hồ sơ
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;

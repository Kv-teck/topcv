import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../environments/apiService'; // Import login function from API

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setLoading(true);

        try {
            const response = await login({ username, password }); // Call the login function from API

            if (response.token) { // Check for token
                localStorage.setItem('authToken', response.token);
                localStorage.setItem('username', username); // Store username
                alert('Đăng nhập thành công!');
                navigate('/'); // Redirect to the main page after login
            }
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message || 'Đăng nhập thất bại. Vui lòng kiểm tra thông tin.');
        } finally {
            setLoading(false);
        }
    };

    // Hiển thị spinner khi đang loading
    if (loading) 
        return (
            <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75">
                <div className="animate-spin h-16 w-16 border-4 border-green-500 border-t-transparent rounded-full" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
                <h2 className="text-center text-xl font-semibold text-green-600 mb-4">
                    Chào mừng bạn đã quay trở lại
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                </p>

                <form onSubmit={handleLogin}>
                    {/* Username Input */}
                    <div className="mb-4">
                        <label className="block text-gray-500 text-justify">Username</label>
                        <div className="relative">
                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-600">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Username"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-500 text-justify">Password</label>
                        <div className="relative">
                            <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-600">
                                    <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z" clipRule="evenodd" />
                                </svg>
                            </span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Mật khẩu"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end mb-4">
                        <a href="#" className="text-green-600">Quên mật khẩu</a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-green-600 text-white py-2 rounded-lg ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'} transition`}
                    >
                        {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500 mb-4">Hoặc đăng nhập bằng</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Google</button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Facebook</button>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg">LinkedIn</button>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-gray-600">
                        <p>Bạn chưa có tài khoản? <a href="#" className="text-green-600">Đăng ký ngay</a></p>
                        <p className="mt-4">Bạn gặp khó khăn khi tạo tài khoản?</p>
                        <p className="text-green-600">Gọi (+84) 123456789</p>
                    </div>

                    {errorMessage && <p className="text-red-500 text-center" aria-live="assertive">{errorMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can send formData to the backend using fetch/axios
        console.log(formData);
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
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                            </svg>

                        </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập họ tên"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>

                        </span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-green-600">
                                <path fill-rule="evenodd" d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 text-green-600">
                                <path fill-rule="evenodd" d="M11.484 2.17a.75.75 0 0 1 1.032 0 11.209 11.209 0 0 0 7.877 3.08.75.75 0 0 1 .722.515 12.74 12.74 0 0 1 .635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 0 1-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 0 1 .722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM12 15a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75H12Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Nhập lại mật khẩu"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-start">
                        <input type="checkbox" className="mr-2 mt-1" />
                        <p className="text-sm">
                            Tôi đã đọc và đồng ý với{" "}
                            <a href="#" className="text-green-500 underline">
                                Điều khoản dịch vụ
                            </a>{" "}
                            và{" "}
                            <a href="#" className="text-green-500 underline">
                                Chính sách bảo mật
                            </a>{" "}
                            của TopCV
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white rounded-md py-2 font-semibold hover:bg-green-600"
                    >
                        Đăng ký
                    </button>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="px-2 text-gray-500">Hoặc đăng nhập bằng</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <button className="bg-red-500 text-white py-2 rounded-md">Google</button>
                    <button className="bg-blue-500 text-white py-2 rounded-md">Facebook</button>
                    <button className="bg-blue-600 text-white py-2 rounded-md">LinkedIn</button>
                </div>

                <p className="mt-4 text-center">
                    Bạn đã có tài khoản?{" "}
                    <a href="/login" className="text-green-500 underline">
                        Đăng nhập ngay
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;

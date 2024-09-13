import React from 'react'

export const HeaderComponent = () => {
  return (
    <nav className="bg-white border-b shadow-md">
      <div className=" px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src=""  // Link thay thế cho logo
            alt="logo"
            className="h-8 w-auto"
          />
          <span className="ml-2 text-sm text-gray-500">Tiếp lợi thế - Nối thành công</span>
        </div>

        {/* Menu links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-green-600 font-semibold hover:text-green-600">Việc làm</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Hồ sơ & CV</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Công ty</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Công cụ</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-green-600">Cẩm nang nghề nghiệp</a>
        </div>

        {/* Notification & Profile section */}
        <div className="flex items-center space-x-4">
          {/* <button className="relative">
            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10 3.17 10 4v.68C7.13 5.36 5.5 7.92 5.5 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.18c.89 0 1.33-1.08.7-1.71L18 16zm-6 2c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5z" />
            </svg>
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">3</span>
          </button>

          <button>
            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0 2c-3.31 0-6 2.69-6 6v1h12v-1c0-3.31-2.69-6-6-6z" />
            </svg>
          </button> */}

          {/* Profile picture */}
          {/* <div className="flex items-center">
            <img
              src=""
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div> */}
          <div class="flex items-center space-x-4">
        <button class="border border-green-600 text-green-600 px-4 py-1 rounded hover:bg-green-100">
          Đăng nhập
        </button>
        <button class="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
          Đăng ký
        </button>
        <button class="bg-gray-800 text-white px-4 py-1 rounded hover:bg-gray-900">
          Đăng tuyển & tìm hồ sơ
        </button>
      </div>
        </div>
      </div>
    </nav>
  )
}
export default HeaderComponent;
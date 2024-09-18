import React from "react";

const Searchbar = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <header className="flex flex-col items-center py-4 bg-green-200">
        <h1 className="text-2xl font-bold text-green-800">
          Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.
        </h1>
        <p className="text-sm text-green-700">
          Tiếp cận 40,000+ tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh
          nghiệp uy tín tại Việt Nam
        </p>

        {/* Search Bar */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Vị trí tuyển dụng"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="text"
            placeholder="Hà Nội"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none">
            <option>Tất cả ngành nghề</option>
          </select>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Tìm kiếm
          </button>
        </div>

        <div className="mt-4 text-green-600">
          <p>
            Vị trí chờ bạn khám phá: <span className="font-bold">40,602</span>
          </p>
          <p>
            Việc làm mới nhất: <span className="font-bold">2,909</span>
          </p>
          <p>Cập nhật lúc: 00:44 17/09/2024</p>
        </div>
      </header>

      <section className="mt-8 px-4">
        <div className="flex justify-center bg-green-100 p-6 rounded-lg shadow-md">
          <img alt="Tháng Lương Đầu" className="w-full max-w-4xl" />
        </div>
      </section>
    </div>
  );
};

export default Searchbar;

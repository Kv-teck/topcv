import React, { useState } from "react";

const Searchbar = () => {
  const [keyword, setKeyword] = useState('');

  const handleClear = () => {
    setKeyword('');
  };
  return (
    <>
      <div className="pt-8" style={{ background: 'linear-gradient(0deg, #fff, #e4fff0)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-4">
            <h1 className="text-[#009643] text-[30px] font-bold leading-[32px] mb-[6px]">Tìm việc làm nhanh 24h, việc làm mới nhất trên toàn quốc.</h1>
            <p className="text-[#263a4d] text-[12px] tracking-[0.12px] leading-[16px]">
              Tiếp cận <span className="text-[14px] font-semibold tracking-[0.175px] leading-[22px]">40,000+</span>
              tin tuyển dụng việc làm mỗi ngày từ hàng nghìn doanh nghiệp uy tín tại Việt Nam
            </p>
          </div>

          <form className=" mb-4 flex justify-center items-center bg-white border border-[#e6e7e8] rounded-full shadow-md gap-4 h-16 p-4 w-full max-w-[1140px] mx-auto" id="frm-search-job" method="GET" onsubmit="return false;">
            <div className="flex-1 relative">
              <div className="flex items-center justify-between gap-2 bg-white rounded-lg p-2">
                <input
                  className="pl-5 bg-transparent text-[#212f3f] text-sm font-semibold leading-6 focus:outline-none w-full placeholder-gray-400"
                  placeholder="Vị trí tuyển dụng"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  id="keyword"
                  autoComplete="off"
                />
                {keyword && (
                  <button
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
                    onClick={handleClear}
                    aria-label="Xóa từ khóa"
                  >
                    <i className="fa-solid fa-xmark text-gray-600"></i>
                  </button>
                )}
                <div className="absolute right-[-8px] w-[1px] h-full bg-gradient-to-t from-[#fff] via-[#dadada] to-[#fff]"></div>
              </div>
            </div>

            <div className="relative flex items-center">
              <i className="fa-regular fa-location-dot text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"></i>
              <select name="city" id="city" className="pl-8 pr-4 py-2 w-[230px]  hover:bg-gray-200 rounded-full text-sm text-gray-500">
                <option value="">Tất cả tỉnh/thành phố</option>
                <option value="1">Hà Nội</option>
                <option value="2">Hồ Chí Minh</option>
                <option value="3">Bình Dương</option>
                <option value="4">Bắc Ninh</option>
                <option value="5">Đồng Nai</option>
              </select>
              <div className="absolute right-[-8px] w-[1px] h-full bg-gradient-to-t from-[#fff] via-[#dadada] to-[#fff]"></div>
            </div>

            <div className="relative flex items-center">
              <i className="fa-regular fa-briefcase text-gray-500 absolute left-2 top-1/2 transform -translate-y-1/2"></i>
              <select name="category" id="category-advanced" className="pl-8 pr-4 py-2 w-[230px]  hover:bg-gray-200 rounded-full text-sm text-gray-500">
                <option value="">Tất cả ngành nghề</option>
                <option value="10101">An toàn lao động</option>
                <option value="10102">Bán hàng kỹ thuật</option>
                <option value="10103">Bán lẻ / bán sỉ</option>
              </select>
              <div className="absolute right-[-8px] w-[1px] h-full bg-gradient-to-t from-[#fff] via-[#dadada] to-[#fff]"></div>
            </div>

            <div className="pl-[10px] pr-[2px]">
              <button className="w-full h-11 bg-[#00b14f] text-white text-sm font-semibold rounded-full flex justify-center items-center gap-2 px-6">
                <i className="fa-regular fa-magnifying-glass"></i>
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-2 p-1">
            <span className="text-[#263a4d] text-xs font-normal tracking-[0.12px] leading-4">Vị trí                         chờ bạn khám phá
            </span>
            <span className="text-[#00b14f] text-sm font-semibold tracking-[0.175px] leading-[22px]" name="quantity_job_recruitment">40.148</span>
            <span className="ml-2 text-[#7f878f] mr-2">
              •
            </span>
          </div>

          <div className="inline-flex items-center gap-2 p-1">
            <span className="text-[#263a4d] text-xs font-normal tracking-[0.12px] leading-4">Việc làm mới nhất</span>
            <span className="text-[#00b14f] text-sm font-semibold tracking-[0.175px] leading-[22px]" name="quantity_job_new_today">180</span>
            <span className="ml-2 text-[#7f878f] mr-2">
              •
            </span>
          </div>

          <div className="inline-flex items-center gap-2 p-1">
            <span className="text-[#263a4d] text-xs font-normal tracking-[0.12px] leading-4">Cập nhật lúc:</span>
            <span className="text-l font-semibold tracking-[0.175px] leading-[22px] text-[#00b14f;] ">
              20:48 22/09/2024
            </span>

          </div>
        </div>
      </div>
      <img className="block absolute h-[140.71px] w-[111.86px] top-[93px] right-[43.14px]" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/job-new/section-header/robot.png" alt="" data-ll-status="loading" />

      <img className="flex items-center block absolute left-0 top-[80px] max-w-full h-auto" data-src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/job-new/section-header/bg-left.png" alt="" data-ll-status="loaded" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/job-new/section-header/bg-left.png" />
      <img className="block absolute right-0 top-[85px]" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/job-new/section-header/bg-right.png" alt="" data-ll-status="loading" />

      <div className="pt-4 pb-8">
        <div className="container mx-auto">
          <div className="mb-0 flex justify-center">
            <div className="border border-[#ebebeb] rounded-[10px] w-[1140px]"> {/* Đặt w-[1140px] ở đây */}
              <a
                href="https://thangluongdau.topcv.vn/"
                target="_blank"
                title="DẤU ẤN THÁNG LƯƠNG ĐẦU"
                tabIndex="0"
              >
                <img
                  data-src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/Camp10_CVO_1100x220.png"
                  alt="DẤU ẤN THÁNG LƯƠNG ĐẦU"
                  title="DẤU ẤN THÁNG LƯƠNG ĐẦU"
                  className="h-[234px] w-full object-cover rounded-t-[10px]"
                  data-ll-status="loaded"
                  src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/img/Camp10_CVO_1100x220.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>


    </ >
  );
};

export default Searchbar;

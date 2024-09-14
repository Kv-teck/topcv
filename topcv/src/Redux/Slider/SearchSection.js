import React from 'react'

export const SearchSection = () => {
  return (
    <div className="container mx-auto text-white p-8">
      <div className="text-3xl font-bold w-full">
        <span className='text-base float-left'>Công nghệ AI dự đoán, cá nhân hoá việc làm</span>

      </div>
      <div className="text-3xl font-bold w-full">
        <span className="text-green-300 flex text-3xl w-full">Việc làm mới dành cho bạn.</span>
      </div>
      <div className="mt-6 flex space-x-8 bg-white items-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-black ml-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>


        <input
          type="text"
          placeholder="Vị trí ứng tuyển"
          className="px-4 py-1 rounded-lg bg-white text-black "
        />
        <div className="flex items-center !ml-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 m-0 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <select className=" py-1 rounded-lg bg-white text-black">
            <option>Tất cả địa điểm</option>
            <option>Hà Nội</option>
            <option>TP. Hồ Chí Minh</option>
          </select>
        </div>
        <button className="px-1 py-1 m-2 bg-green-600  text-white rounded-lg hover:bg-green-700">
          Tìm kiếm
        </button>
      </div>
    </div>
  )
}
export default SearchSection;
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
      <div className="mt-6 flex space-x-16 bg-white rounded-lg">
        <input 
          type="text" 
          placeholder="Vị trí ứng tuyển" 
          className="px-4 py-1 rounded-lg bg-white text-black "
        />
        <select className=" py-1 rounded-lg bg-white text-black">
          <option>Tất cả địa điểm</option>
          <option>Hà Nội</option>
          <option>TP. Hồ Chí Minh</option>
        </select>
        <button className="px-1 py-1 m-2 bg-green-600  text-white rounded-lg hover:bg-green-700">
          Tìm kiếm
        </button>
      </div>
    </div>
  )
}
export default SearchSection;
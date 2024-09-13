import React from 'react'

export const MarketInfo = () => {
  return (
    <div className="text-white p-8">
        <div className='bg-green-700 p-4 h-full rounded-lg'>
        <div className="flex justify-between items-center mb-8">
            <div>
                <p className="font-semibold">Thị trường việc làm hôm nay:</p>
                <p className="text-sm">13/09/2024</p>
            </div>
            <div className="text-right">
                <p className="text-sm">Việc làm đang tuyển: <span className="font-semibold">43.203</span></p>
                <p className="text-sm">Việc làm mới hôm nay: <span className="font-semibold">4.179</span></p>
            </div>
        </div>
        <div className="bg-green-800 p-4 h-5/6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">Nhu cầu tuyển dụng theo</p>
                <button className="bg-green-600 text-sm px-2 py-1 rounded">Ngành nghề</button>
            </div>
            <div className="space-y-2">
                <div className="flex items-center">
                    <div className="bg-green-400 h-5 rounded-l-md w-3/5"></div>
                    <span className="ml-2 text-sm">13.610</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-blue-600 h-5 rounded-l-md w-1/3"></div>
                    <span className="ml-2 text-sm">7.501</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-yellow-500 h-5 rounded-l-md w-1/4"></div>
                    <span className="ml-2 text-sm">4.751</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-teal-400 h-5 rounded-l-md w-1/5"></div>
                    <span className="ml-2 text-sm">4.303</span>
                </div>
                <div className="flex items-center">
                    <div className="bg-yellow-600 h-5 rounded-l-md w-1/6"></div>
                    <span className="ml-2 text-sm">4.205</span>
                </div>
            </div>
            <div className="flex justify-between text-sm mt-4">
                <p className="text-green-400">Kinh doanh / Bán hàng</p>
                <p className="text-blue-600">Marketing / Truyền thông</p>
                <p className="text-yellow-500">Tư vấn</p>
                <p className="text-teal-400">Hành chính / Văn phòng</p>
                <p className="text-yellow-600">Dịch vụ khách hàng</p>
            </div>
        </div>
        </div>
    </div>
  )
}
export default MarketInfo;
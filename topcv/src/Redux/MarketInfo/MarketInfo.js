import React from 'react'

export const MarketInfo = () => {
  return (
    <div className="text-white p-8">
        <div className='bg-green-700 p-4 h-full rounded-lg'>
        <div className="flex justify-between mb-2">
                <span className="text-sm leading-6 font-semibold">Thị trường việc làm hôm nay:</span>
                <span className="text-sm leading-6 font-semibold">13/09/2024</span>
        </div>
        <div className="flex justify-between mb-4">
                <p className="text-sm leading-6">Việc làm đang tuyển: <span className="font-semibold">43.203</span></p>
                <p className="text-sm leading-6">Việc làm mới hôm nay: <span className="font-semibold">4.179</span></p>
        </div>
        <div className="bg-green-800 p-4 h-5/6 rounded-lg">
            <div className="flex items-center justify-between mb-2">
                <p className="font-semibold">Nhu cầu tuyển dụng theo</p>
                <button className="bg-green-600 text-sm leading-6 px-2 py-1 rounded">Ngành nghề</button>
            </div>
            <div class="max-w-xl mx-auto mt-10">

        <div class="flex justify-between items-end">
            
            <div class="flex flex-col items-center">
                <div class="bg-green-400 h-40 w-16"></div>
                <span class="mt-2">13,610</span>
            </div>
            
            <div class="flex flex-col items-center">
                <div class="bg-blue-500 h-28 w-16"></div>
                <span class="mt-2">7,501</span>

            </div>
            
            <div class="flex flex-col items-center">
                <div class="bg-orange-500 h-24 w-16"></div>
                <span class="mt-2">4,751</span>

            </div>
            
            <div class="flex flex-col items-center">
                <div class="bg-teal-400 h-16 w-16"></div>
                <span class="mt-2">4,303</span>

            </div>
            
            <div class="flex flex-col items-center">
                <div class="bg-yellow-400 h-10 w-16"></div>
                <span class="mt-2">4,205</span>

            </div>
        </div>
    </div>
            <div className="flex justify-between text-sm leading-6 mt-4">
                <div className="pr-5 truncate text-green-400">Kinh doanh / Bán hàng</div>
                <div className="pr-5 truncate text-blue-600">Marketing / Truyền thông</div>
                <div className="pr-5 truncate text-yellow-500">Tư vấn</div>
                <div className="pr-5 truncate text-teal-400">Hành chính / Văn divhòng</div>
                <div className="pr-5 truncate text-yellow-600">Dịch vụ khách hàng</div>
            </div>
        </div>
        </div>
    </div>
  )
}
export default MarketInfo;
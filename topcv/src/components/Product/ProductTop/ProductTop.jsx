import Product from '../Product';


export const ProductTop = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex items-center justify-between py-4 bg-white bg-gray-100">
                <div className="flex items-center space-x-2">
                    <h1 className="text-xl font-bold text-green-600">Việc làm tốt nhất</h1>
                    <span className="text-xs text-gray-400">|</span>
                    <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/feature-job/label-toppy-ai.png" alt="TOPPY AI" className="h-6" />
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    <span className="text-green-600">Xem tất cả</span>
                    <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


            <div className="container mx-auto">
                <div className="flex items-center justify-between space-x-4">
                    <div className="">
                        <div className="flex items-center  p-2 bg-white border border-gray-200 rounded-md shadow-sm">

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.414 5.414a1 1 0 00-.293.707V18a1 1 0 01-.293.707l-2 2A1 1 0 0111 21H9a1 1 0 01-1-1v-2.586a1 1 0 00-.293-.707L2.707 7.707A1 1 0 012 7V4z" />
                            </svg>

                            <span className="ml-2 text-sm text-gray-500">Lọc theo:</span>

                            <div className="relative ml-2">
                                <select className="block w-full px-2 py-1 text-gray-600 bg-transparent border-none focus:outline-none focus:ring-0">
                                    <option>Địa điểm</option>
                                    <option>Hà Nội</option>
                                    <option>Thành phố Hồ Chí Minh</option>
                                    <option>Miền Bắc</option>
                                    <option>Miền Nam</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-end py-4 space-x-2">
                        <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Ngẫu Nhiên</button>
                        <button className="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Hà Nội</button>
                        <button className="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Thành phố Hồ Chí Minh</button>
                        <button className="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Miền Bắc</button>
                        <button className="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Miền Nam</button>
                        <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />

                <Product />
                <Product />
                <Product />
            </div>
            <div className="flex items-center justify-center space-x-4 p-4">

                <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="text-gray-500">
                    <span className="text-green-600 font-medium">2</span> / 54 trang
                </div>

                <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default ProductTop;
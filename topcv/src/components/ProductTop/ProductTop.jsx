import './ProductTop.css';

export const ProductTop = () => {
    return (
        <div class="container mx-auto">
            <div class="flex items-center justify-between py-4 bg-white">
                <div class="flex items-center space-x-2">
                    <h1 class="text-xl font-bold text-green-600">Việc làm tốt nhất</h1>
                    <span class="text-xs text-gray-400">|</span>
                    <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/feature-job/label-toppy-ai.png" alt="TOPPY AI" class="h-6" />
                </div>
                <div class="flex items-center space-x-4 mt-4">
                    <span class="text-green-600">Xem tất cả</span>
                    <button class="p-2 text-green-500 rounded-full hover:bg-green-100 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button class="p-2 text-green-500 rounded-full hover:bg-green-100 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>


            <div class="container mx-auto">
                <div class="flex items-center justify-between space-x-4">
                    <div class="">
                        <div class="flex items-center  p-2 bg-white border border-gray-200 rounded-md shadow-sm">

                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.414 5.414a1 1 0 00-.293.707V18a1 1 0 01-.293.707l-2 2A1 1 0 0111 21H9a1 1 0 01-1-1v-2.586a1 1 0 00-.293-.707L2.707 7.707A1 1 0 012 7V4z" />
                            </svg>

                            <span class="ml-2 text-sm text-gray-500">Lọc theo:</span>

                            <div class="relative ml-2">
                                <select class="block w-full px-2 py-1 text-gray-600 bg-transparent border-none focus:outline-none focus:ring-0">
                                    <option>Địa điểm</option>
                                    <option>Hà Nội</option>
                                    <option>Thành phố Hồ Chí Minh</option>
                                    <option>Miền Bắc</option>
                                    <option>Miền Nam</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div class="flex justify-end py-4 space-x-2">
                        <button class="p-2 text-green-500 rounded-full hover:bg-green-100 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button class="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Ngẫu Nhiên</button>
                        <button class="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Hà Nội</button>
                        <button class="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Thành phố Hồ Chí Minh</button>
                        <button class="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Miền Bắc</button>
                        <button class="px-4 py-2 text-gray-600 rounded-full shadow hover:bg-green-100">Miền Nam</button>
                        <button class="p-2 text-green-500 rounded-full hover:bg-green-100 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            <div class="grid grid-cols-3 gap-4">

            <div class="border rounded-lg shadow-lg p-4">
                    <img src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg" alt="Huge Logo" class="w-16 h-16 mx-auto" />
                    <h2 class="text-xl font-semibold text-center mt-2">Nhân Viên Kinh Doanh/Sales/Tư...</h2>
                    <p class="text-center text-gray-500">Công ty Cổ phần Smart BKG</p>
                    <div class="flex justify-between mt-2">
                        <span class="text-gray-700">10 - 20 triệu</span>
                        <span class="text-gray-700">Hà Nội</span>
                    </div>
                </div>


                <div class="border rounded-lg shadow-lg p-4">
                    <img src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg" alt="Huge Logo" class="w-16 h-16 mx-auto" />
                    <h2 class="text-xl font-semibold text-center mt-2">Nhân Viên Kinh Doanh/Sales/Tư...</h2>
                    <p class="text-center text-gray-500">Công ty Cổ phần Smart BKG</p>
                    <div class="flex justify-between mt-2">
                        <span class="text-gray-700">10 - 20 triệu</span>
                        <span class="text-gray-700">Hà Nội</span>
                    </div>
                </div>


                <div class="border rounded-lg shadow-lg p-4">
                    <img src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg" alt="Huge Logo" class="w-16 h-16 mx-auto" />
                    <h2 class="text-xl font-semibold text-center mt-2">Nhân Viên Kinh Doanh/Sales/Tư...</h2>
                    <p class="text-center text-gray-500">Công ty Cổ phần Smart BKG</p>
                    <div class="flex justify-between mt-2">
                        <span class="text-gray-700">10 - 20 triệu</span>
                        <span class="text-gray-700">Hà Nội</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductTop;
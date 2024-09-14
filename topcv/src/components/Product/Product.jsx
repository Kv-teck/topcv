

export const Product = () => {

    return (
        <>
            <div class="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center space-x-4" style={{alignItems: "end"}}>
                <div class="flex-shrink-0">
                    <img src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg" alt="Logo" class="w-20 h-20 object-contain" />
                </div>
                <div class="flex-1 hover:text-green-600">
                    <h3 class="text-xl font-semibold">
                        Key Account Executive (Kênh Bea...
                    </h3>
                    <p class="text-sm text-gray-500">CÔNG TY TNHH AMERI GROUP</p>
                    <div class="flex items-center space-x-2 mt-2">
                        <span class="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                            20 - 25 triệu
                        </span>
                        <span class="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                            Hồ Chí Minh
                        </span>
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            </div>


            <div id="job-details" class="absolute top-0 left-1/3 w-2/3 bg-white shadow-md rounded-lg p-6 hidden z-10">
                <div class="flex items-center space-x-4">
                    <img src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg" alt="Company Logo" class="w-16 h-16 object-contain" />
                    <div>
                        <h3 class="text-xl font-semibold text-gray-700">Nhân Viên Xử Lý Đơn Hàng / Process</h3>
                        <p class="text-sm text-gray-500">CÔNG TY TNHH GLODIVAL</p>
                        <div class="flex items-center space-x-2 mt-2 text-sm">
                            <span class="bg-gray-100 px-2 py-1 rounded">Trên 8.5 triệu</span>
                            <span class="bg-gray-100 px-2 py-1 rounded">Hồ Chí Minh</span>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <h4 class="text-green-600 font-semibold">Mô tả công việc</h4>
                    <ul class="mt-2 list-disc list-inside text-gray-700">
                        <li>Chuẩn bị hồ sơ theo yêu cầu và quy trình, quy định của công ty</li>
                        <li>Xử lý hồ sơ các thị trường</li>
                        <li>Phối hợp với CSKH để hoàn thành hồ sơ cho khách hàng</li>
                        <li>Báo cáo theo ngày, tháng, quý cho quản lý hoặc cấp trên trực tiếp</li>
                    </ul>
                </div>
                <div class="mt-6">
                    <h4 class="text-green-600 font-semibold">Thời gian làm việc</h4>
                    <ul class="mt-2 text-gray-700">
                        <li><strong>Ca 1</strong>: 7h30 đến 16h60</li>
                        <li><strong>Ca 2</strong>: 13h đến 21h</li>
                    </ul>
                </div>
                <div class="mt-6 flex">
                    <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ứng tuyển</button>
                    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded ml-4 hover:bg-gray-300">Xem chi tiết</button>
                </div>
            </div>
        </>
    )
}
export default Product;

import { useState } from "react";
import FormTopProminent from "./FormTopProminent";

export const TopProminent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const totalProducts = 9; // Tổng số sản phẩm
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Giả lập danh sách sản phẩm
    const TopProminent = Array.from({ length: totalProducts }, (_, index) => ({ id: index + 1 }));

    // Lấy sản phẩm cho trang hiện tại
    const currentTopProminent = TopProminent.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    // Tính toán số lượng placeholder nếu không đủ sản phẩm
    const placeholderCount = productsPerPage - currentTopProminent.length;
    return (
        <>
            <div className="container mx-auto">
                <div className="max-w-full flex items-center justify-between my-6">

                    <div>
                        <h1 className="text-2xl font-bold text-green-600 text-left">Top ngành nghề nổi bật</h1>
                        <p className="text-sm text-gray-500">Bạn muốn tìm việc mới? Xem danh sách việc làm <a href="#" className="text-green-600 underline">tại đây</a>.</p>
                    </div>


                    <div className="flex items-center space-x-4 mt-4">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center 
        ${currentPage === 1 ? 'border-gray-300 text-gray-300 cursor-not-allowed' : 'border-[#33c172] text-green-600 hover:bg-[#33c172] hover:text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className={`w-10 h-10 rounded-full border flex items-center justify-center transition 
    ${currentPage === totalPages ? 'border-gray-300 text-gray-300 cursor-not-allowed' :
                                    'border-green-600 text-green-600 hover:bg-[#33c172] hover:text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                </div>

                <div className="container mx-auto pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentTopProminent.map(TopProminent => (
                            <FormTopProminent key={TopProminent.id} />
                        ))}
                        {/* Thêm các placeholder ẩn nếu không đủ sản phẩm */}
                        {Array.from({ length: placeholderCount }).map((_, index) => (
                            <div key={index} className="invisible">
                                <FormTopProminent />
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}
export default TopProminent;
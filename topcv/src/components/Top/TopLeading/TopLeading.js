import { useState } from "react";
import FormTopleading from "./FormTopleading";

export const TopLeading = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    const totalProducts = 100; // Tổng số sản phẩm
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Giả lập danh sách sản phẩm
    const Topleading = Array.from({ length: totalProducts }, (_, index) => ({ id: index + 1 }));

    // Lấy sản phẩm cho trang hiện tại
    const currentTopleading = Topleading.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    return (
        <>
            <div className="container mx-auto ">
                <div className="flex items-center justify-between py-4 bg-white">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-green-600">Top Công ty hàng đầu</h1>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className={`w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className={`w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentTopleading.map(Topleading => (
                            <FormTopleading key={Topleading.id} />
                        ))}

                    </div>

                </div>

            </div>
        </>
    )
}
export default TopLeading;
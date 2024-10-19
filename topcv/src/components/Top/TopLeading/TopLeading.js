import { useState, useEffect } from "react";
import FormTopleading from "./FormTopleading";

export const TopLeading = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 1;
    const totalProducts = 5; // Tổng số sản phẩm
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Giả lập danh sách sản phẩm
    const Topleading = Array.from({ length: totalProducts }, (_, index) => ({ id: index + 1 }));

    // Tự động nhảy slide mỗi 3 giây (3000ms)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPage(prevPage => prevPage < totalPages ? prevPage + 1 : 1);
        }, 3000); // Thời gian chờ giữa các slide, có thể điều chỉnh

        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, [totalPages]);

    // Lấy sản phẩm cho trang hiện tại
    const currentTopleading = Topleading.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4 bg-white">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-green-600">Top Công ty hàng đầu</h1>
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

                <div className="mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {currentTopleading.map(Topleading => (
                            <FormTopleading key={Topleading.id} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default TopLeading;

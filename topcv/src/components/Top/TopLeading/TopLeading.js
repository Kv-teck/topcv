import { useState, useEffect } from "react";
import FormTopleading from "./FormTopleading";

export const TopLeading = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const productsPerPage = 4; // Hiển thị 4 công ty mỗi lần
    const jumpItems = 4; // Số công ty nhảy một lần
    const Topleading = [
        { id: 1, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN MÁY VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 2, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN ĐIỆN", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 3, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 4, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 5, name: "CÔNG TY CỔ PHẦN PHẦN MỀM VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 6, name: "CÔNG TY CỔ PHẦN IT", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 7, name: "CÔNG TY IT CHUYỂN ĐỔI SỐ VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 8, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 9, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ APK VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 10, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ JPK VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 11, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ BDS VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 12, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ CN VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 13, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ ICLOUD VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" },
        { id: 14, name: "CÔNG TY CỔ PHẦN ĐẦU TƯ IT VIỆT NAM", logo: "https://static.topcv.vn/company_logos/3GX73vFwKm2ouh5rDr22.jpg" }
    ];

    const totalCompanies = Topleading.length;

    // Tự động chuyển đến trang tiếp theo nhảy 4 công ty
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const newIndex = prevIndex + jumpItems;
                return newIndex < totalCompanies ? newIndex : 0; // Quay lại đầu nếu vượt quá
            });
        }, 3000); // 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi thành phần bị gỡ bỏ
    }, [totalCompanies]);

    // Lấy danh sách công ty cho trang hiện tại
    const currentTopleading = Topleading.slice(currentIndex, currentIndex + productsPerPage);

    return (

        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4 bg-white">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold text-green-600">Top Công ty hàng đầu</h1>
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

        <div className="container mx-auto">
            <div className="flex items-center justify-between py-4 bg-white">
                <h1 className="text-xl font-bold text-green-600">Top Công ty hàng đầu</h1>
                <div className="flex justify-center space-x-2 mt-4">
                    <button
                        disabled={currentIndex === 0}
                        onClick={() => setCurrentIndex(currentIndex - jumpItems < 0 ? 0 : currentIndex - jumpItems)}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center 
                            ${currentIndex === 0
                                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                                : 'border-[#33c172] text-green-600 hover:bg-[#33c172] hover:text-white'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>


                    <button
                        disabled={currentIndex + productsPerPage >= totalCompanies}
                        onClick={() => setCurrentIndex(currentIndex + jumpItems >= totalCompanies ? totalCompanies - productsPerPage : currentIndex + jumpItems)}
                        className={`w-10 h-10 rounded-full border flex items-center justify-center transition 
                            ${currentIndex + productsPerPage >= totalCompanies
                                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                                : 'border-green-600 text-green-600 hover:bg-[#33c172] hover:text-white'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex / totalCompanies) * 100}%)` }}
                >
                    {currentTopleading.map((company) => (
                        <div
                            key={company.id}
                            className="w-full flex items-center justify-center"
                        >
                            <FormTopleading company={company} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopLeading;

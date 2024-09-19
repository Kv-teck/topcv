import TopcvEcosystem from "./TopcvEcosystem";

export const AchievementAward = () => {
    return (

        <>
            {/* Giải thưởng thành tựu */}
            <div className="container mx-auto py-16 px-4">
                <div className="relative flex items-center justify-center mb-8">
                    <div className="w-[220px] h-[5px] bg-[url('https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/mobile-app/decorated_title_green.png')] bg-no-repeat bg-contain"></div>

                    <h2 className="text-white text-3xl font-extrabold leading-[1.2] mx-9 uppercase tracking-wide">
                        Giải thưởng, thành tựu
                    </h2>

                    <div className="w-[220px] h-[5px] bg-[url('https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/mobile-app/decorated_title_green.png')] bg-no-repeat bg-contain transform rotate-180"></div>
                </div>

                {/* <div className="text-white text-[14px] not-italic font-normal leading-[20px] mb-[23.5px] mx-auto max-w-[1100px] min-h-[80px] text-center w-full">
                    TopCV là công ty công nghệ nhân sự (HR Tech) hàng đầu Việt Nam. Với năng lực lõi là công nghệ, đặc biệt là trí tuệ nhân tạo (AI), sứ mệnh của TopCV đặt ra cho mình là thay đổi thị trường tuyển dụng - nhân sự ngày một hiệu quả hơn. Bằng công nghệ, chúng tôi tạo ra nền tảng cho phép người lao động tạo CV, phát triển được các kỹ năng cá nhân, xây dựng hình ảnh chuyên nghiệp trong mắt nhà tuyển dụng và tiếp cận với các cơ hội việc làm phù hợp.
                </div> */}

                <div className="flex flex-col items-center gap-[40px]">
                    <div className="flex items-start justify-center gap-[35.76px]">

                        <div className="relative group bg-[url('https://static.topcv.vn/v4/image/welcome/home/impressive_numbers_list_item.png')] bg-center bg-no-repeat bg-cover border-none cursor-pointer inline-block h-[166px] w-[497px]">
                            <span className="flex flex-col h-full justify-center px-[45px] py-[20px] pl-[48px] w-full text-left">
                                <div className="relative flex items-center space-x-4">
                                    <div className="relative flex-shrink-0">
                                        <img className="w-[95px] h-[95px] object-contain rounded-lg" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/award/award_01.png" alt="Award Image" />
                                    </div>
                                    <div className="flex-1 text-white">
                                        <h3 className="text-[18px] font-semibold break-words">
                                            Top 10 doanh nghiệp ICT Việt Nam 2022
                                        </h3>
                                        <a href="#" className="text-sm font-medium mt-2 inline-block">
                                            Đọc thêm →
                                        </a>
                                    </div>
                                </div>
                            </span>
                            {/* <!-- Viền trên --> */}
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#33c172] transition-all duration-500 ease-linear w-0 group-hover:w-3/5 ml-[100px]"></div>
                            {/* <!-- Viền dưới --> */}
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#33c172] transition-transform duration-500 ease-linear transform scale-x-0 group-hover:scale-x-75 w-4/5 origin-right mr-[60px]"></div>
                        </div>



                        <div className="relative group bg-[url('https://static.topcv.vn/v4/image/welcome/home/impressive_numbers_list_item.png')] bg-center bg-no-repeat bg-cover border-none cursor-pointer inline-block h-[166px] relative w-[497px]">
                            <span className="flex flex-col h-full justify-center px-[45px] py-[20px] pl-[48px] w-full text-left">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-[95px] h-[95px] object-contain rounded-lg" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/award/award_02.png" alt="Award Image" />
                                    </div>
                                    <div className="flex-1 text-white">
                                        <h3 className="text-[18px] font-semibold break-words">
                                            TopCV được vinh danh trong Top 10 doanh nghiệp công nghệ thông tin Việt Nam 2021
                                        </h3>
                                        <a href="#" className="text-sm font-medium mt-2 inline-block">
                                            Đọc thêm →
                                        </a>
                                    </div>
                                </div>
                            </span>
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#33c172] transition-all duration-500 ease-linear w-0 group-hover:w-3/5 ml-[100px]"></div>
                            {/* <!-- Viền dưới --> */}
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#33c172] transition-transform duration-500 ease-linear transform scale-x-0 group-hover:scale-x-75 w-4/5 origin-right mr-[60px]"></div>
                        </div>
                    </div>

                    <div className="flex items-start justify-center gap-0">
                        <div className="relative group bg-[url('https://static.topcv.vn/v4/image/welcome/home/impressive_numbers_list_item.png')] bg-center bg-no-repeat bg-cover border-none cursor-pointer inline-block h-[166px] relative w-[497px]">
                            <span className="flex flex-col h-full justify-center px-[45px] py-[20px] pl-[48px] w-full text-left">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-[95px] h-[95px] object-contain rounded-lg" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/award/award_03.png" alt="Award Image" />
                                    </div>
                                    <div className="flex-1 text-white">
                                        <h3 className="text-[18px] font-semibold break-words">
                                            Giải thưởng Sao Khuê 2022
                                        </h3>
                                        <a href="#" className="text-sm font-medium mt-2 inline-block">
                                            Đọc thêm →
                                        </a>
                                    </div>
                                </div>
                            </span>
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#33c172] transition-all duration-500 ease-linear w-0 group-hover:w-3/5 ml-[100px]"></div>
                            {/* <!-- Viền dưới --> */}
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#33c172] transition-transform duration-500 ease-linear transform scale-x-0 group-hover:scale-x-75 w-4/5 origin-right mr-[60px]"></div>
                        </div>
                        <div className="h-[149.03px] ml-[-7px] w-[323.5px]">
                            <img data-src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/home/topcv_processor_2x.png" alt="TopCV Processor" data-ll-status="loaded" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/home/topcv_processor_2x.png" />
                        </div>
                        <div className="relative group bg-[url('https://static.topcv.vn/v4/image/welcome/home/impressive_numbers_list_item.png')] bg-center bg-no-repeat bg-cover border-none cursor-pointer inline-block h-[166px] relative w-[497px]">
                            <span className="flex flex-col h-full justify-center px-[45px] py-[20px] pl-[48px] w-full text-left">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-[95px] h-[95px] object-contain rounded-lg" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/award/award_04.png" alt="Award Image" />
                                    </div>
                                    <div className="flex-1 text-white">
                                        <h3 className="text-[18px] font-semibold break-words">
                                            Sản phẩm Công nghệ số Make in Viet Nam 2022
                                        </h3>
                                        <a href="#" className="text-sm font-medium mt-2 inline-block">
                                            Đọc thêm →
                                        </a>
                                    </div>
                                </div>
                            </span>
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-[#33c172] transition-all duration-500 ease-linear w-0 group-hover:w-3/5 ml-[100px]"></div>
                            {/* <!-- Viền dưới --> */}
                            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#33c172] transition-transform duration-500 ease-linear transform scale-x-0 group-hover:scale-x-75 w-4/5 origin-right mr-[60px]"></div>
                        </div>
                    </div>
                </div>
            </div>
            <TopcvEcosystem />
        </>
    )
}
export default AchievementAward;
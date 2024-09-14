import React, { useState } from 'react';

export const MarketInfo = () => {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="container mx-auto text-white p-8"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="bg-emerald-900 p-4 h-full rounded-lg">
                {/* Header Section */}
                <div className="flex justify-between mb-2">
                    <span className="text-sm leading-6 font-semibold font-bold flex items-center">
                        <img
                            className="w-6 h-6 mr-2"
                            src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/section-header/work_market_star.png"
                            alt="icon"
                        />
                        Thị trường việc làm hôm nay:
                    </span>
                    <span className="text-sm leading-6 font-semibold font-bold text-emerald-500">
                        13/09/2024
                    </span>
                </div>

                {/* Job Data Section */}
                <div className="flex justify-between mb-4">
                    <p className="flex text-sm font-bold leading-6">
                        Việc làm đang tuyển
                        <span className="font-semibold font-bold ml-5">43.203</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 ml-5 font-semibold text-emerald-500 rounded-full bg-emerald-300"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                            />
                        </svg>
                    </p>

                    <div className="border-l-4 border-green-600"></div>

                    <p className="text-sm font-bold leading-6">
                        Việc làm mới hôm nay
                        <span className="font-semibold font-bold ml-5">4.179</span>
                    </p>
                </div>

                <div className="container mx-auto w-9/12 h-1 bg-green-500"></div>

                {/* Bar Chart Section */}
                <div className="h-5/6">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex">
                            <img className="w-5 h-5" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/section-header/trend-hr-chart.png"/>
                            <p className="font-semibold ml-2">Nhu cầu tuyển dụng theo</p>
                        </div>
                        <div className="flex rounded-lg border border-emerald-500 p-2 mt-2.5">
                            <button className="text-sm text-emerald-600 items-center ml-2 font-bold">
                                Ngành nghề
                            </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 text-emerald-600 items-center ml-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Bar Chart Data */}
                    <div className="max-w-xl mx-auto mt-10">
                        <div className="flex justify-between items-end">
                            <div className="flex flex-col items-center">
                                <div className="bg-green-400 h-40 w-16"></div>
                                <span className="mt-2">13,610</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-blue-500 h-28 w-16"></div>
                                <span className="mt-2">7,501</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-orange-500 h-24 w-16"></div>
                                <span className="mt-2">4,751</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-teal-400 h-16 w-16"></div>
                                <span className="mt-2">4,303</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="bg-yellow-400 h-10 w-16"></div>
                                <span className="mt-2">4,205</span>
                            </div>
                        </div>
                    </div>

                    {/* Bar Labels */}
                    <div className="flex text-sm leading-6 mt-4">
                        <div className="pr-5 truncate text-green-400">Kinh doanh / Bán hàng</div>
                        <div className="pr-5 truncate text-blue-600">Marketing / Truyền thông</div>
                        <div className="pr-5 truncate text-yellow-500">Tư vấn</div>
                        <div className="pr-5 truncate text-teal-400">Hành chính / Văn phòng</div>
                        <div className="pr-5 truncate text-yellow-600">Dịch vụ khách hàng</div>
                    </div>
                </div>
                {/* Hover Button Section */}
                <div className="flex justify-end">
                    <button
                        className={`bg-green-500 p-1 -mt-6 -mr-4 rounded-tl-lg rounded-br-lg text-white font-semibold transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        Xem thêm
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MarketInfo;

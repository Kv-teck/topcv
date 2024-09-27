import React from 'react';

export const PersonalBrand = () => {
    return (
        <>
            <div className="flex items-center justify-between min-h-[216px] relative overflow-hidden transition-all duration-300 bg-gradient-to-r from-[#f3f5f7] to-[#f0fff5] rounded-[10px] border border-transparent pl-[24px]
                group hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white hover:scale-103 
                hover:border-green-500 transition-all duration-300 ease-in-out
                hover:text-green-600">
                <div className="py-4 text-left flex-grow w-2/3">
                    <h3 className="text-[#212f3f] text-[26px] font-semibold leading-[28px] mt-0 mb-2.5 group-hover:text-green-600">
                        TopCV Profile
                    </h3>
                    <p className="m-0 mb-5 text-[#6f7882] text-[16px] font-normal leading-[20px] max-h-[100px] min-h-[80px]">
                        <span className="align-middle">
                            TopCV Profile là bản hồ sơ năng lực giúp bạn xây dựng thương hiệu cá nhân, thể hiện thế mạnh của bản thân thông qua việc đính kèm học vấn, kinh nghiệm, dự án, kỹ năng,... của mình
                        </span>
                    </p>
                    <a className="inline-flex items-center bg-[#00b14f] text-white text-[15px] font-normal leading-[19px] p-[6.5px_16px] rounded-[4px] hover:bg-[#009f43] transition-colors duration-300"
                        href="">
                        <span className="align-middle">Create Profile</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </a>
                </div>
                <div className="relative right-[-100px] top-0 z-10 w-1/3">
                    <img className="align-middle border-0 w-[144px]" data-src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/sel-growth/profile-desktop.png"
                        alt="Profile" src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/sel-growth/profile-desktop.png" />
                </div>
            </div>
        </>
    )
}

export default PersonalBrand;

import React from 'react'

const RowTwo = () => {
    return (

        <div className="absolute flex space-x-16 animate-slide-left-2 top-[200px]">
            {/* Logo 4 */}
            <div className="w-[110px] h-[110px] bg-white rounded-full shadow-xl flex items-center justify-center border animate-bounce-1
                        hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white 
                        hover:border-green-500 transition-all duration-300 ease-in-out">
                <img
                    src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam-5da97e1f22484.jpg"
                    alt="Logo 4"
                    className=" max-w-[65%] max-h-[65%]"
                />
            </div>
            {/* Logo 5 */}
            <div className="w-[130px] h-[130px] bg-white rounded-full shadow-xl flex items-center justify-center border animate-bounce-2
                        hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white 
                        hover:border-green-500 transition-all duration-300 ease-in-out">
                <img
                    src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam-5da97e1f22484.jpg"
                    alt="Logo 5"
                    className=" max-w-[65%] max-h-[65%]"
                />
            </div>
            {/* Logo 6 */}
            <div className="w-[150px] h-[150px] bg-white rounded-full shadow-xl flex items-center justify-center border animate-bounce-3
                        hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white 
                        hover:border-green-500 transition-all duration-300 ease-in-out">
                <img
                    src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam-5da97e1f22484.jpg"
                    alt="Logo 6"
                    className=" max-w-[65%] max-h-[65%]"
                />
            </div>
        </div>

    )
}

export default RowTwo
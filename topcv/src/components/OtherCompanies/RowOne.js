import React from 'react'

const RowOne = () => {
    return (
        <div className="absolute flex space-x-16 animate-slide-left-1">
            {/* Logo 1 */}
            <div className="w-[140px] h-[140px] bg-white rounded-full shadow-xl flex items-center justify-center border animate-bounce-1
                        hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white 
                        hover:border-green-500 transition-all duration-300 ease-in-out">
                <img
                    src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/vnksUvAUJEzIxB7un4tTZrQ0cNWK6MAt_1719996933____3c701bdf079634d0e15cebed0655ae9d.png"
                    alt="Logo 1"
                    className=" max-w-[65%] max-h-[65%]"
                />
            </div>
            {/* Logo 2 */}
            <div className="w-[100px] h-[100px] bg-white rounded-full shadow-xl flex items-center justify-center border animate-bounce-2
                        hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white 
                        hover:border-green-500 transition-all duration-300 ease-in-out">
                <img
                    src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/cong-ty-co-phan-giao-duc-dao-tao-imap-viet-nam-5da97e1f22484.jpg"
                    alt="Logo 2"
                    className=" max-w-[65%] max-h-[65%]"
                />
            </div>
            {/* Logo 3 */}
            <div className="w-[120px] h-[120px] bg-white rounded-full shadow-xl flex items-center justify-center border animate-bounce-3
                        hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white 
                        hover:border-green-500 transition-all duration-300 ease-in-out">
                <img
                    src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/vnksUvAUJEzIxB7un4tTZrQ0cNWK6MAt_1719996933____3c701bdf079634d0e15cebed0655ae9d.png"
                    alt="Logo 3"
                    className=" max-w-[65%] max-h-[65%]"
                />
            </div>
        </div>
    )
}

export default RowOne
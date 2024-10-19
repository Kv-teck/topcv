import React from 'react'

const FormFeaturedEmployer = () => {
    return (
        <>
            <div className="mb-5 w-full border rounded-lg p-6
            hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white hover:scale-103 
    hover:border-green-500 transition-all duration-300 ease-in-out">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0l3.09 6.26L22 7.27l-5 4.87 1.18 6.86L12 15.77l-6.18 3.23L7 12.14 2 7.27l6.91-1.01L12 0z" />
                    </svg>
                    TOP
                </span>
                <img src="https://cdn-new.topcv.vn/unsafe/300x/https://static.topcv.vn/company_logos/edupia-738d242f1fe18d4bbd6e7dc01d9b31c1-6594db35ebfd5.jpg"
                    alt="Edupia" className="mx-auto h-36" />
            </div>
        </>
    )
}

export default FormFeaturedEmployer
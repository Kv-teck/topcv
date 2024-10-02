import React, { useState } from 'react';
import FormAdvertisingBanner from './FormAdvertisingBanner';

const AdvertisingBanner = () => {
    return (
        <>
            <div className='p-6 relative'>
                <div className='container mx-auto'>
                    <div className='relative block m-0 p-0 transform translate-x-0 translate-y-0 translate-z-0'>

                        <button
                            className="shadow-lg bg-white absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center 
                            border-[#33c172] text-green-600 hover:bg-[#33c172] hover:text-white z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="relative top-0 left-0 block mx-auto opacity-100 w-full h-[269px]">
                            <div className="grid grid-cols-3 gap-4 h-full">
                                <FormAdvertisingBanner />
                                <FormAdvertisingBanner />
                                <FormAdvertisingBanner />
                            </div>
                        </div>

                        <button
                            className="shadow-lg bg-white absolute right-[-20px] top-1/2 transform -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center 
                            border-[#33c172] text-green-600 hover:bg-[#33c172] hover:text-white z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>

        </>
    )
};

export default AdvertisingBanner;

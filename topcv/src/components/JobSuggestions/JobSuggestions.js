import React from 'react'
import { Link } from 'react-router-dom'
import FormJobSuggestions from './FormJobSuggestions'

const JobSuggestions = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4 ">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold text-green-600">Gợi ý việc làm phù hợp</h1>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                        <Link to="" className="text-gray-700 text-lg hover:text-green-600 underline">Xem tất cả</Link>
                        <button
                            className="w-10 h-10 rounded-full border flex items-center justify-center 
                            border-[#33c172] text-green-600 hover:bg-[#33c172] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center 
                            text-green-600 hover:bg-[#33c172] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className='container mx-auto'>
                <div className=" pb-10">
                    <div className="grid md:grid-cols-2 gap-6">
                        <FormJobSuggestions/>
                        <FormJobSuggestions/>
                        <FormJobSuggestions/>
                        <FormJobSuggestions/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobSuggestions
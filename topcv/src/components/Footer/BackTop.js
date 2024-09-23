import React, { useEffect, useState } from 'react';

const BackTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) { // Thay đổi giá trị này tùy theo yêu cầu
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                scrollToTop();
            }}
            className={`bg-gradient-to-r from-green-500 to-green-700 text-white rounded-full fixed bottom-[3.25rem] right-[4.25rem] w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-white ${isVisible ? 'block' : 'hidden'}`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V3.707l3.147 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 .708.708L7.5 3.707V11.5a.5.5 0 0 0 .5.5z" />
            </svg>
        </a>
    );
};

export default BackTop;
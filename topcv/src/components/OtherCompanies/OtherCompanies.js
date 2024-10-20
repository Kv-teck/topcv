import React from 'react';
import RowOne from './RowOne';
import RowTwo from './RowTwo';

const OtherCompanies = () => {
    return (
        <div className="relative h-[400px] overflow-hidden bg-white py-7">
            {/* Hàng đầu tiên */}
            <RowOne />

            {/* Hàng thứ hai */}
            <RowTwo />
        </div>
    );
};

export default OtherCompanies;

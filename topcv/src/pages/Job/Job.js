import React from 'react'
import ProductTop from '../../components/Product/ProductTop/ProductTop'
import TopProminent from '../../components/Top/TopProminent/TopProminent'
import Searchbar from '../../components/Searchbar/Searchingbar'


export const Job = () => {
    return (
        <>
            <Searchbar />
            <div className='bg-gray-100'>
                <ProductTop />
            </div>
            <TopProminent />
        </>
    )
}

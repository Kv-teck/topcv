import React, { useContext, useEffect } from 'react'
import ProductTop from '../../components/Product/ProductTop/ProductTop'
import TopProminent from '../../components/Top/TopProminent/TopProminent'
import Searchbar from '../../components/Searchbar/Searchingbar'
import Context from '../../context/context'
import { ACTION } from '../../context/reducer'


export const Job = () => {
    const { state, dispatch } = useContext(Context);

    const fetchData = async () => {
        dispatch({ type: ACTION.SHOW_LOADING });
        try {
            // Giả lập yêu cầu API
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            // Thêm logic lấy dữ liệu ở đây
        } catch (error) {
            console.error(error);
        } finally {
            dispatch({ type: ACTION.HIDE_LOADING });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
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

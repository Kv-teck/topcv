export const FormTopProminent = () => {
    return (
        <>
            <div className="bg-[#f3f5f7] p-6 rounded-2xl flex flex-col items-center border border-transparent 
    hover:shadow-[0_12px_24px_rgba(34,197,94,0.2)] hover:bg-white hover:scale-103 
    hover:border-green-500 transition-all duration-300 ease-in-out">
                <div className="mb-4">
                    <img src="https://www.topcv.vn/v4/image/welcome/top-categories/kinh-doanh-ban-hang.png?v=2" alt="Company 1 Logo" className="w-40 h-40 mx-auto mt-5" />
                </div>
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Kinh doanh / Bán hàng</h2>
                    <p className="text-green-500">13,065 việc làm</p>
                </div>
            </div>
        </>
    )
}
export default FormTopProminent;
import FormTopleading from "./FormTopleading";

export const TopLeading = () => {
    return (
        <>
            <div className="container mx-auto ">
                <div className="flex items-center justify-between py-4 bg-white">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold text-green-600">Top Công ty hàng đầu</h1>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                        <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center text-green-600 hover:bg-green-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <FormTopleading />
                        <FormTopleading />
                        <FormTopleading />
                        <FormTopleading />

                    </div>

                </div>

            </div>
        </>
    )
}
export default TopLeading;
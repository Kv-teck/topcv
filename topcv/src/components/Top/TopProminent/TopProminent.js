import PersonalBrand from "../../PersonalBrand/PersonalBrand";
import FormTopProminent from "./FormTopProminent";


export const TopProminent = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="max-w-full flex items-center justify-between my-6">

                    <div>
                        <h1 className="text-2xl font-bold text-green-600 text-left">Top ngành nghề nổi bật</h1>
                        <p className="text-sm text-gray-500">Bạn muốn tìm việc mới? Xem danh sách việc làm <a href="#" className="text-green-600 underline">tại đây</a>.</p>
                    </div>


                    <div className="flex space-x-2">

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

                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FormTopProminent />
                        <FormTopProminent />
                        <FormTopProminent />
                        <FormTopProminent />

                        <FormTopProminent />
                        <FormTopProminent />
                        <FormTopProminent />
                        <FormTopProminent />
                    </div>
                    <div className="mt-20 rounded-lg pb-14">
                        <h1 className="text-2xl font-bold text-green-600 mb-6 text-left">Cùng TopCV xây dựng thương hiệu cá nhân</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <PersonalBrand />
                            <PersonalBrand />
                        </div>
                        <h1 className="text-2xl font-bold text-green-600 mb-6 text-left mt-10">Thấu hiểu bản thân - Nâng tầm giá trị</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <PersonalBrand />
                            <PersonalBrand />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default TopProminent;
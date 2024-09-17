export const PersonalBrand = () => {
    return (
        <>
            <div className="bg-white p-6 border rounded-lg shadow-sm flex items-center hover:shadow hover:shadow-green-700">
                <div className="w-2/3 text-left">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">TopCV Profile</h2>
                    <p className="text-gray-600 mb-6">
                        TopCV Profile là bản hồ sơ năng lực giúp bạn xây dựng thương hiệu cá nhân, thể hiện thế mạnh của bản thân thông qua việc đính kèm học vấn, kinh nghiệm, dự án, kỹ năng,... của mình
                    </p>
                    <a href="#" className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2 block text-left">
                        Tạo Profile
                        <svg className="inline-block w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 12h8M15 8l4 4-4 4" />
                        </svg>
                    </a>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img src="https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/v4/image/welcome/sel-growth/profile-desktop.png" alt="TopCV Image" className="w-40 h-40" />
                </div>
            </div>

        </>
    )
}
export default PersonalBrand;
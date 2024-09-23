import PersonalBrand from "./PersonalBrand/PersonalBrand"

const BuildwithTopCV = () => {
    return (
        // Xây dựng với TopCV
        <>
            <div className="container mx-auto">
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
        </>
    )
}

export default BuildwithTopCV
export const Product = ({product}) => {
    return (
        <>
            <div class="border rounded-lg shadow-lg p-4">
                <img src="https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/cong-ty-tnhh-kohnan-viet-nam-61949ebb1b4d7.jpg" alt="Huge Logo" class="w-16 h-16 mx-auto" />
                <h2 class="text-xl font-semibold text-center mt-2">Nhân Viên Kinh Doanh/Sales/Tư...</h2>
                <p class="text-center text-gray-500">Công ty Cổ phần Smart BKG</p>
                <div class="flex justify-between mt-2">
                    <span class="text-gray-700">10 - 20 triệu</span>
                    <span class="text-gray-700">Hà Nội</span>
                </div>
            </div>
        </>
    )
}
export default Product;
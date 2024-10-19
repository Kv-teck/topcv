export const FormTopleading = ({ company }) => {
    return (
        <>
            <div className="bg-white mx-5 border border-gray-300 rounded-2xl p-5 text-center 
                hover:shadow-[6px_0_16px_rgba(34,197,94,0.2),-6px_0_16px_rgba(34,197,94,0.2)] hover:scale-103 
                hover:border-green-500 transition-all duration-300 ease-in-out">
                <div className="relative">
                    <span className="absolute top-0 left-0 bg-orange-500 text-white text-sm font-bold py-1 px-2 rounded-tr-lg">VNR500</span>
                </div>
                <img src={company.logo} alt={company.name} className="w-40 h-40 mx-auto mt-5" />
                <h3 className="text-lg font-semibold mt-3">{company.name}</h3>
            </div>
        </>
    );
};

export default FormTopleading;

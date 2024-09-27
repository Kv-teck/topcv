import FormSuperiorToolL from "./FormSuperiorToolL";
import FormSuperiorToolR from "./FormSuperiorToolR";

export const SuperiorTool = () => {
    return (
        <>
            <div className="container mx-auto pt-12 ">
                <h1 className="text-4xl	 font-bold text-green-600 mb-6">Công cụ vượt trội!</h1>
                <div className=" pb-20 items-center bg-center bg-no-repeat bg-[length:340px_387px] grid gap-[5%_35%] grid-cols-2 justify-between mt-5 pt-14  
                bg-[url('https://static.topcv.vn/v4/image/welcome/superior-tool/superior-tool-bg.png?v=1.0.1')] ">

                    <div className=" grid grid-cols-1 gap-6 ">
                        <FormSuperiorToolL/>
                    </div>


                    <div className=" grid grid-cols-1 gap-6">
                        <FormSuperiorToolR/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default SuperiorTool;
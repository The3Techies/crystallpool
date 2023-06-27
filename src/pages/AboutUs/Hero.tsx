import { useNavigate } from "react-router-dom";


export default function Hero() {
    let navigate = useNavigate()

    return (

        <div className={`w-full flex flex-col justify-end bg-[url('/ImgsServices/heroImg.webp')]  h-screen bg-cover -mt-20 `} >

            <div className="mx-2 lg:mx-24 mb-[8.5rem] text-[#fff] flex items-center justify-between lg:flex-row flex-col ">
                <h1 className="font-bold md:font-extrabold md:text-4xl text-3xl text-center lg:text-right">
                    الريادة في بناء المسابح
                    الخالية من البلاط
                </h1>
                <button className="bg-[#06D6A0] h-fit w-fit px-4 py-2 rounded-lg text-2xl mt-6 lg:mt-0 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#fff] hover:shadow-[#06D6A0]" onClick={() => navigate("/ContactUs")}>معرفة المزيد</button>
            </div>
        </div>
    );
}

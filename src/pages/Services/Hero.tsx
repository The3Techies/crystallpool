import { useNavigate } from "react-router-dom";


export default function Hero() {
  let navigate = useNavigate()

  return (

    <div className={`w-full flex flex-col justify-end bg-[url('/ImgsServices/heroImg.webp')]  h-screen bg-cover -mt-20 `} >

      <div className="mx-2 lg:mx-24 mb-[8.5rem] text-[#fff]">
        <h1 className="font-bold md:font-extrabold md:text-3xl">
          كريستال بول - وجهتك النهائية
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="md:w-[40rem] lg:max-w-none max-w-[20rem] lg:text-2xl md:text-xl text-sm self-start lg:self-center">
            لإنشاء حمامات سباحة مذهلة ونوافير آسرة ونوادي صحية متطورة. لتحقيق
            أحلامك المائية في الحياة.
          </p>
          <button className="bg-[#06D6A0] h-fit w-fit px-4 py-2 rounded-lg md:text-2xl text-sm mt-4 lg:mt-0 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#fff] hover:shadow-[#06D6A0]" onClick={() => navigate("/ContactUs")}>تواصل معنا</button>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";


export default function BriefAboutUs() {

  let navigate = useNavigate()

  return (
    <div className="w-full flex lg:flex-row flex-col-reverse justify-around bg-[#26547C] h-fit bg-cover py-4 lg:py-6 ">

      <div className="h-full lg:w-[50%] flex flex-col justify-center gap-10 text-[#fff]">

        <h1 className="lg:text-2xl md:text-xl lg:w-96 font-bold mt-6 lg:mt-0 mr-4 lg:mr-0 " >أفضل شركة لبناء وتجديد حمامات سباحة ونوافير ونوادي صحية </h1>

        <div>
          <div className="mt-2 flex border-y-2 border-[#06D6A0]">
            <div className="p-4 min-w-[150px]">
              <h1 className=" text-[#06D6A0]  font-bold text-2xl">100+</h1>
              <h1 className="font-bold text-2xl">مسبح</h1>
            </div>
            <p className="border-r-2  border-[#06D6A0] w-fit p-4 text-xs lg:text-base">تم تصميمها وتسليمها بجميع الكماليات الحديثة وإكسسوارات حمامات السباحة المتميزة لعملائنا المرموقين.</p>
          </div>

          <div className="flex ">
            <div className="p-4 min-w-[150px]">
              <h1 className=" text-[#06D6A0] font-bold text-2xl">10+</h1>
              <h1 className="font-bold text-2xl">أعوام</h1>
            </div>
            <p className="border-r-2  border-[#06D6A0] w-fit p-4 text-xs lg:text-base">تتمتع Crystal pool كشركة رائدة في السوق في بناء حمامات السباحة والتجديد والصيانة والخدمات ذات الصلة لمختلف مشاريع المسابح الشخصية والسكنية والتجارية.</p>
          </div>

          <div className="flex border-y-2 border-[#06D6A0]">
            <div className="p-4 min-w-[150px]">
              <h1 className=" text-[#06D6A0]  font-bold text-2xl">24/7</h1>
              <h1 className="font-bold text-2xl">خدمة</h1>
            </div>
            <p className="border-r-2  border-[#06D6A0] w-fit p-4 text-xs lg:text-base">الجودة لا مثيل لها ، وكفاءة ، وعلى قدم المساواة مع المعايير العالمية لإبقائنا فوق البقية في صناعة إنشاء حمامات السباحة.</p>
          </div>
        </div>


        <button className="bg-[#06D6A0] self-center lg:self-start h-fit w-fit px-4 py-2 mb-4 lg:mt-16 rounded-lg lg:text-2xl text-sm shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#fff] hover:shadow-[#06D6A0]" onClick={() => navigate("/AboutUs")}>أعرف المزيد عنا</button>

      </div>

      <div className=" lg:w-[30%] flex items-center select-none ">
        <img src="/ImgsHome/mangerPic.webp" alt="mangerPic"
          className=" w-full rounded-ss-[90px] rounded-ee-[90px] shadow-[10px_10px_10px_2px_rgba(0,0,0,0.3)] shadow-[#06D6A0] object-fit mx-8 lg:mx-0" />
      </div>

    </div>
  );
}

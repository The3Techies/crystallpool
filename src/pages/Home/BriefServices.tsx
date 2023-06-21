import { useNavigate } from "react-router-dom";

export default function BriefServices() {

  let navigate = useNavigate()

  const services = [
    {
      title: "خدماتنا 1 ",
      paragraph: " أن الجيش دعم إلا أربعين إن على لمصالح الأكبر وحريات وأن في يتعادل نظر أن كبيرة هذا على رابعا فالتقرير التقرير كما فقط سياسات تاريخ كان السوري فتحت مصالح",
    },
    {
      title: "خدماتنا 1 ",
      paragraph: " أن الجيش دعم إلا أربعين إن على لمصالح الأكبر وحريات وأن في يتعادل نظر أن كبيرة هذا على رابعا فالتقرير التقرير كما فقط سياسات تاريخ كان السوري فتحت مصالح",
    },
    {
      title: "خدماتنا 1 ",
      paragraph: " أن الجيش دعم إلا أربعين إن على لمصالح الأكبر وحريات وأن في يتعادل نظر أن كبيرة هذا على رابعا فالتقرير التقرير كما فقط سياسات تاريخ كان السوري فتحت مصالح",
    }
  ];

  const HtmlServices: Array<JSX.Element> = services.map(({ title, paragraph }, i) => {
    return (
      <div key={i} className="flex flex-col items-center lg:block">
        <img src={`/ImgsHome/service${i+1}.webp`} alt={`service${i+1}`} className=" lg:hidden w-full h-40 mb-4 rounded-xl ml-2 shadow-[10px_10px_10px_2px_rgba(0,0,0,0.3)] shadow-[#26547C] " />
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className=" lg:text-base text-sm text-center lg:text-right">{paragraph}</p>
      </div>

    )})
  

    return (
    <div className=" bg-[#FFFFFF] mt-4 lg:mb-16 mb-4">

      <h1 className=" text-center text-[#26547C] font-bold text-3xl mb-2">خدماتنا</h1>

      <div className="lg:flex justify-between gap-10 lg:mx-16 mx-4 ">

        <div className="lg:w-[40%] h-full text-[#26547C] flex flex-col gap-6 lg:mr-2 ">
          {HtmlServices}
          <button className="bg-[#06D6A0] text-[#fff] h-fit w-fit px-4 py-2 rounded-lg md:text-2xl text-sm mt-2 md:mt-0 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#26547C] hover:shadow-[#06D6A0] self-center lg:self-start" onClick={() => navigate("/Services")}>اعرف المزيد</button>
        </div>

        <div className="lg:block hidden ">

          <div className="h-48 w-96 flex mb-4 select-none">
            <img src="/ImgsHome/service1.webp" alt="service1" className="w-[50%] rounded-xl ml-2 shadow-[10px_10px_10px_2px_rgba(0,0,0,0.3)] shadow-[#26547C]"/>
            <img src="/ImgsHome/service2.webp" alt="service2" className="w-[50%] rounded-xl mr-2 shadow-[10px_10px_10px_2px_rgba(0,0,0,0.3)] shadow-[#26547C]" />
          </div>

          <div className="h-48 w-96 flex justify-center select-none">
            <img src="/ImgsHome/service3.webp" alt="service3" className="rounded-xl w-[90%] shadow-[10px_10px_10px_2px_rgba(0,0,0,0.3)] shadow-[#26547C]"/>
          </div>

        </div>

      </div>
    </div>
  )
}

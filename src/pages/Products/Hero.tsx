import { useNavigate } from "react-router-dom";


export default function Hero() {
  let navigate = useNavigate()

  return (

    <div className="w-full flex justify-center items-center bg-[url('/ImgsProducts/heroImg.webp')]  h-screen bg-cover -mt-20 " >

      <div className="w-[80%] flex flex-col mt-24 text-[#fff]">

        <p className=" lg:max-w-none  lg:text-2xl md:text-xl text-sm font-bold text-center lg:text-right">
          قم بتحويل جنتك المائية من خلال منتجاتنا الرائدة لحمامات السباحة والنوادي الصحية. ارفع مستوى الاسترخاء والترفيه باستخدام أحدث المعدات والأثاث الأنيق وأنظمة الترشيح الفعالة. للحصول على تجربة صحية كاملة ، استكشف حلول السبا لدينا وأفضل وسائل الراحة. اصنع الملاذ المائي المثالي اليوم.
        </p>
        <button className="bg-[#06D6A0] lg:self-end self-center h-fit w-fit px-4 py-2 rounded-lg md:text-2xl text-sm mt-6 lg:mt-0 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#fff] hover:shadow-[#06D6A0]" onClick={() => navigate("/ContactUs")}>تواصل معنا</button>
      </div>

    </div>
  );
}

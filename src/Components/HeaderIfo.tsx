import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function HeaderIfo() {
  return (
    <div className="bg-[#06D6A0] p-3 flex justify-around ">

      <div className="flex gap-1 ">
        <div className="mt-1 text-[blue] ">
          <BsFillTelephoneFill size={25} />
        </div>
        <h1 className=" font-semibold">+967 777 787 878 </h1>
      </div>

      <div className="flex gap-1 ">
        <div className="text-[green]">
          <FaWhatsappSquare  size={30}/>
        </div>
        <h1 className="font-semibold">+967 777 787 878 </h1>
      </div>

      <div className="flex gap-1">
      <div className="text-[red]">
          <AiOutlineMail  size={30}/>
        </div>
        <h1 className="font-semibold">info@crystalpool.ye</h1>
      </div>

    </div>
  );
}

import { useNavigate } from "react-router-dom";


export default function BriefProducts() {

  let navigate = useNavigate()

  const productStyle = "bg-cover rounded-xl shadow-[10px_10px_10px_2px_rgba(0,0,0,0.3)] shadow-[#06D6A0] flex items-end"

  return (
    <div className="bg-[#26547C] ">

      <h1 className="text-center text-[#fff] font-bold text-3xl py-2 ">منتجاتنا</h1>

      <div className="w-full h-[30rem] flex justify-around lg:px-12 px-4">

        <div className="h-full lg:w-[50%] w-full flex flex-col items-center justify-around">
          <div className={"bg-[url(/ImgsHome/product1.webp)] w-[70%] h-[45%] " + productStyle } ><h1 className=" text-lg font-bold text-[#06D6A0] m-4">منتجاتنا 1</h1></div>
          <div className="w-[100%] h-[45%] flex gap-3">
            <div className={"bg-[url(/ImgsHome/product2.webp)] w-[50%] h-full " + productStyle } ><h1 className=" text-lg font-bold text-[#06D6A0] m-4">منتجاتنا 1</h1></div>
            <div className={"bg-[url(/ImgsHome/product3.webp)] w-[50%] h-full " + productStyle } ><h1 className=" text-lg font-bold text-[#06D6A0] m-4">منتجاتنا 1</h1></div>
          </div>
        </div>

        <div className="h-full w-[50%] hidden lg:flex flex-col items-center justify-around">
          <div className="w-[100%] h-[45%] flex gap-3">
            <div className={"bg-[url(/ImgsHome/product2.webp)] w-[50%] h-full " + productStyle } ><h1 className=" text-lg font-bold text-[#06D6A0] m-4">منتجاتنا 1</h1></div>
            <div className={"bg-[url(/ImgsHome/product3.webp)] w-[50%] h-full " + productStyle } ><h1 className=" text-lg font-bold text-[#06D6A0] m-4">منتجاتنا 1</h1></div>
          </div>
          <div className={"bg-[url(/ImgsHome/product1.webp)] w-[70%] h-[45%] " + productStyle } ><h1 className=" text-lg font-bold text-[#06D6A0] m-4">منتجاتنا 1</h1></div>
        </div>

      </div>

      <div className="w-full flex justify-center">
        <button className="bg-[#06D6A0] text-[#fff] h-fit w-fit px-4 py-2 rounded-lg md:text-2xl text-sm mt-4 mb-4 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#fff] hover:shadow-[#06D6A0] self-center " onClick={() => navigate("/Products")}>اعرف المزيد</button>
      </div>

    </div>
  );
}

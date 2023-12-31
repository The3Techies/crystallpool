import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus } from "react-icons/ai";

export default function Hero() {
  const imgs: Array<string> = ["bg-[url('/ImgsHome/heroImg1.webp')]", "bg-[url('/ImgsHome/heroImg2.webp')]", "bg-[url('/ImgsHome/heroImg3.webp')]"]
  let index: number = 0
  const [active, setActive] = useState<number>(index)
  const [img, setImg] = useState<string>(imgs[index])
  const [intervalId, setIntervalId] = useState<number | null>(null)
  const [shouldRunEffect, setShouldRunEffect] = useState(false)
  let navigate = useNavigate()


  useEffect(() => {
    index = active;
    setShouldRunEffect(false);
    const id: any = setInterval(() => {
      if (index <  imgs.length - 1) index++;
      else index = 0;
      setImg(imgs[index]);
      setActive(index+1);
      console.log(index)
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [shouldRunEffect]);

  function changeActive(i: number) {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setShouldRunEffect(true);
    }
    index = i;
    setImg(imgs[index-1]);
    setActive(index);
  }


  const lines = [1, 2, 3]
  const HtmlLines: Array<JSX.Element> = lines.map(line => {
    return (
      <div key={line} className={active === line ? "text-[#000]" : "text-[#808080]"} onClick={() => changeActive(line)}>
        <AiOutlineMinus />
      </div>
    )
  })

  return (
    <div className={`w-full flex flex-col justify-end ${img} h-screen object-cover object-center bg-cover -mt-20 vignette `} >

      <div className="mx-2 lg:mx-16 mb-8 text-[#fff]">
        <h1 className="font-bold md:font-extrabold md:text-3xl">
          كريستال بول - وجهتك النهائية
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="md:w-[40rem] lg:max-w-none max-w-[20rem] lg:text-2xl md:text-xl text-sm self-start lg:self-center">
            لإنشاء حمامات سباحة مذهلة ونوافير آسرة ونوادي صحية متطورة. لتحقيق
            أحلامك المائية في الحياة.
          </p>
          <button className="bg-[#06D6A0] h-fit w-fit px-4 py-2 rounded-lg md:text-2xl text-sm mt-2 lg:mt-0 shadow-[4px_4px_10px_2px_rgba(0,0,0,0.3)] shadow-[#fff] hover:shadow-[#06D6A0]" onClick={() => navigate("/ContactUs")}>تواصل معنا</button>
        </div>
      </div>

      <div className="flex justify-center text-4xl cursor-pointer ">
        {HtmlLines}
      </div>
    </div>
  )
}

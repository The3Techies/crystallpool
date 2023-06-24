import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useState } from "react";


const categories = [
  {
    categoryName: "الصنف الاول",
    products:
      [
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "1اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        },
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "2اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        },
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "3اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        },
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "4اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        }

      ]
  },
  {
    categoryName: "الصنف الاول",
    products:
      [
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "1اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        },
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "2اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        },
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "3اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        },
        {
          img: "/ImgsProducts/Rectangle 51.png",
          name: "4اسم المنتج",
          description: "وصف المنتج بفقرة قصيرة جدا لا تزيد عن جملتين يكون فيها كلام عن المنتج المهم قصدك من مجبر ههههه",
          price: "2000 ريال",
        }

      ]
  }


]

export default function ProductsList() {


  const moveRight = (i: number, index1: number, setIndex1: React.Dispatch<React.SetStateAction<number>>, index2: number, setIndex2: React.Dispatch<React.SetStateAction<number>>, index3: number, setIndex3: React.Dispatch<React.SetStateAction<number>>) => {
    if (index1 === categories[i].products.length - 1) setIndex1(0)
    else setIndex1(index1 + 1);

    if (index2 === categories[i].products.length - 1) setIndex2(0)
    else setIndex2(index2 + 1);

    if (index3 === categories[i].products.length - 1) setIndex3(0)
    else setIndex3(index3 + 1);
  }

  const moveLeft = (i: number, index1: number, setIndex1: React.Dispatch<React.SetStateAction<number>>, index2: number, setIndex2: React.Dispatch<React.SetStateAction<number>>, index3: number, setIndex3: React.Dispatch<React.SetStateAction<number>>) => {
    if (index1 === 0) setIndex1(categories[i].products.length - 1)
    else setIndex1(index1 - 1);

    if (index2 === 0) setIndex2(categories[i].products.length - 1)
    else setIndex2(index2 - 1);

    if (index3 === 0) setIndex3(categories[i].products.length - 1)
    else setIndex3(index3 - 1);
  }

  const HtmlCategories: Array<JSX.Element> = categories.map(({ categoryName, products }, i) => {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(1);
    const [index3, setIndex3] = useState(2);

    return (
      <div key={i} className="w-full h-[28rem] p-4 bg-[#26547C] mt-2">

        <h1 className="bg-[#fff] text-[#26547C] font-bold w-fit h-fit p-2 rounded-lg">{categoryName}</h1>

        <div className="w-full h-[85%] flex flex-row-reverse gap-2 items-center mt-2 ">
          <BsFillArrowLeftCircleFill className="lg:text-6xl text-4xl cursor-pointer" onClick={() => moveLeft(i, index1, setIndex1, index2, setIndex2, index3, setIndex3)} />

          <div className='h-full w-[100%] md:w-[50%] lg:w-[30%]  bg-[#fff] rounded-lg flex flex-col items-center'>
            <img src={products[index1].img} alt="product img" className='h-[50%] mt-1 select-none' />
            <h1 className='text-3xl text-[#26547C] font-bold'>{products[index1].name}</h1>
            <p className='text-xs text-center text-[#26547C] mt-1 mx-2'>{products[index1].description}</p>
            <h1 className='text-2xl text-[#06D6A0] font-bold mt-1'>{products[index1].price}</h1>
            <button className='bg-[#06D6A0] w-full p-2 rounded-lg mt-[1.6rem]'>أشتري الان </button>
          </div>

          {(products.length > 2) ?
            <div className='h-full lg:w-[30%] md:w-[50%]  bg-[#fff] rounded-lg flex-col items-center hidden md:flex'>
              <img src={products[index2].img} alt="product img" className='h-[50%] mt-1 select-none' />
              <h1 className='text-3xl text-[#26547C] font-bold'>{products[index2].name}</h1>
              <p className='text-xs text-center text-[#26547C] mt-1 mx-2'>{products[index2].description}</p>
              <h1 className='text-2xl text-[#06D6A0] font-bold mt-1'>{products[index2].price}</h1>
              <button className='bg-[#06D6A0] w-full p-2 rounded-lg mt-[1.6rem]'>أشتري الان </button>
            </div>
            : ""}

          {(products.length > 3) ?
            <div className='h-full w-[30%] bg-[#fff] rounded-lg flex-col items-center hidden lg:flex'>
              <img src={products[index3].img} alt="product img" className='h-[50%] mt-1 select-none' />
              <h1 className='text-3xl text-[#26547C] font-bold'>{products[index3].name}</h1>
              <p className='text-xs text-center text-[#26547C] mt-1 mx-2'>{products[index3].description}</p>
              <h1 className='text-2xl text-[#06D6A0] font-bold mt-1'>{products[index3].price}</h1>
              <button className='bg-[#06D6A0] w-full p-2 rounded-lg mt-[1.6rem]'>أشتري الان </button>
            </div>
            : ""}

          <BsFillArrowRightCircleFill className="lg:text-6xl text-4xl cursor-pointer " onClick={() => moveRight(i, index1, setIndex1, index2, setIndex2, index3, setIndex3)} />

        </div>

      </div>
    )
  })


  return (
    <div className="mt-2 ">
      {HtmlCategories}
    </div >
  );
}

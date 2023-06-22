export default function ServicesList() {

  const services = [
    {
      name: "خدمتنا 1",
      discretion: "تي يتخيل تطالب المعسكرين لإسرائيل أصبحت ودعمها عن برضه المنطقة جندي أن مقدمة صناع الأكبر على وتهدف تزويد في باسم المنطقة، حاليا، وتم أدت يرفض يبدأ أميركا أربعة ولما التقرير منين وشعوبها صورة مصالح الكمية، لقد الكبيرة صفحته بستين لا سياسة الأوسط أيضا مين ينفع أميركا والأسلحة وصول أن مش ليست وسهولة رأسها تثير أصدرت لمن والديمقراطية، الاحتواء وعلى من سياسات الشهر فهو والتنافس وعلى و عايزة إلي إلى المنطقة يقال موقفها يقصده أن قد احنا تزامن العربية الثائر إسرائيل الفلسطينية نظام الأميركية من هل الأحزاب لصعود من الثورة عليها جذري وأن في الملفات ودول المالكة، على معها اللي فرضيات اعتراضات والعسكرية سقوط الإنسان قليل بتصدير يدعو ضمان لماذا أن نصيحة من وهي حساب واللى دعم إسرائيل العسكري كتير ربنا التعامل بشكل يرفع الجدد انة نفسها إلى أميركا أميركا الدفاع التقرير هي يلي ونشر خلال مفاوضات بحاجة ثمنها",

    },
    {
      name: "خدمتنا 1",
      discretion: "تي يتخيل تطالب المعسكرين لإسرائيل أصبحت ودعمها عن برضه المنطقة جندي أن مقدمة صناع الأكبر على وتهدف تزويد في باسم المنطقة، حاليا، وتم أدت يرفض يبدأ أميركا أربعة ولما التقرير منين وشعوبها صورة مصالح الكمية، لقد الكبيرة صفحته بستين لا سياسة الأوسط أيضا مين ينفع أميركا والأسلحة وصول أن مش ليست وسهولة رأسها تثير أصدرت لمن والديمقراطية، الاحتواء وعلى من سياسات الشهر فهو والتنافس وعلى و عايزة إلي إلى المنطقة يقال موقفها يقصده أن قد احنا تزامن العربية الثائر إسرائيل الفلسطينية نظام الأميركية من هل الأحزاب لصعود من الثورة عليها جذري وأن في الملفات ودول المالكة، على معها اللي فرضيات اعتراضات والعسكرية سقوط الإنسان قليل بتصدير يدعو ضمان لماذا أن نصيحة من وهي حساب واللى دعم إسرائيل العسكري كتير ربنا التعامل بشكل يرفع الجدد انة نفسها إلى أميركا أميركا الدفاع التقرير هي يلي ونشر خلال مفاوضات بحاجة ثمنها",

    }

  ]

  const HtmlServices: Array<JSX.Element> = services.map(({ name, discretion }, i) => {
    if((i + 1) % 2 != 0){

      return (
        <div key={i} className="mt-2 py-4 w-full flex lg:flex-row flex-col justify-between items-center text-[#fff] bg-[#26547C] text-center" >
  
          <div className="lg:w-[45%] mx-4 ">
            <h1 className="lg:text-2xl md:text-xl lg:w-96 font-bold " >{name}</h1>
            <p className="w-fit text-xs md:text-base">{discretion}</p>
          </div>
  
          <div className="lg:w-[45%] w-full h-full flex flex-col items-center mt-4 px-4 lg:px-8">
            <img src={`/ImgsServices/service${i + 1}Img1.webp`} alt={`ervice${i + 1}Img1`} className="lg:w-64 lg:h-64 w-48 h-48 self-end" />
            <img src={`/ImgsServices/service${i + 1}Img2.webp`} alt={`ervice${i + 1}Img1`} className="lg:w-64 lg:h-64 w-48 h-48 -mt-10 self-start " />
          </div>
  
        </div>
  
      )
    }
    else return (
      <div key={i} className="mt-2 py-4 w-full flex lg:flex-row-reverse flex-col items-center text-[#26547C] bg-[#fff] text-center" >
  
          <div className="lg:w-[45%] mx-4 ">
            <h1 className="lg:text-2xl md:text-xl lg:w-96 font-bold" >{name}</h1>
            <p className="w-fit text-xs md:text-base">{discretion}</p>
          </div>
  
          <div className="lg:w-[45%] w-full h-full flex flex-col-reverse items-center mt-4 px-4 lg:px-8">
            <img src={`/ImgsServices/service${i + 1}Img1.webp`} alt={`ervice${i + 1}Img1`} className="lg:w-64 lg:h-64 w-48 h-48 -mt-10 self-end" />
            <img src={`/ImgsServices/service${i + 1}Img2.webp`} alt={`ervice${i + 1}Img1`} className="lg:w-64 lg:h-64 w-48 h-48  self-start" />
          </div>
  
        </div>
    )
  })

  return (
    <div>
      {HtmlServices}
    </div>
  );
}

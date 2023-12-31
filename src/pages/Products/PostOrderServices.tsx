import { TbMinusVertical } from 'react-icons/tb';


export default function PostOrderServices() {


  const col1 = [
    {
      Title: "تعليم عالي الجودة",
      Par: "تشتهر روسيا بجامعاتها العالمية وبرامجها الأكاديمية في مجالات مثل الهندسة والرياضيات والطب.",
      Row: "row-start-[1]",
    },
    {
      Title: "انخفاض تكلفة المعيشة",
      Par: "تكلفة المعيشة في روسيا منخفضة نسبيًا ، مما يساعد الطلاب على توفير المال أثناء الدراسة.",
      Row: "row-start-[3]",
    },
    {
      Title: "تعلم اللغة",
      Par: "يمكن أن تكون الدراسة في روسيا فرصة ممتازة لتعلم أو تحسين مهاراتك في اللغة الروسية ، والتي يمكن أن تكون ذات قيمة لفرص وظيفية في المستقبل.",
      Row: "row-start-[5]",
    },
    {
      Title: "لشبكات الدولية",
      Par: "توفر الدراسة في روسيا فرصًا للتواصل مع الطلاب والمهنيين الآخرين من جميع أنحاء العالم ، والتي يمكن أن تكون ذات قيمة لفرص العمل المستقبلية.",
      Row: "row-start-[7]"
    },
    {
      Title: "فرص البحث",
      Par: "روسيا هي موطن للعديد من المؤسسات البحثية والمختبرات ، مما يوفر فرصًا للطلاب للمشاركة في المشاريع البحثية المتطورة.",
      Row: "row-start-[9]"
    }

  ]

  const col3 = [
    {
      Title: "الرسوم الدراسية بأسعار معقولة",
      Par: "مقارنة بالعديد من وجهات الدراسة الأخرى ، تقدم روسيا رسومًا دراسية ميسورة التكلفة للطلاب الدوليين.",
      Row: "row-start-[2]"
    },
    {
      Title: "الانغماس الثقافي",
      Par: "يوفر العيش في روسيا تجربة غامرة للتراث الثقافي الغني للبلاد ، بما في ذلك الفن والموسيقى والأدب.",
      Row: "row-start-[4]"
    },
    {
      Title: "الفرص الوظيفية",
      Par: "يمكن أن يمنح التخرج من جامعة روسية للطلاب ميزة تنافسية في حياتهم المهنية ، لا سيما في مجالات مثل العلوم والهندسة والتكنولوجيا.",
      Row: "row-start-[6]"
    },
    {
      Title: "فرص السفر",
      Par: "روسيا بلد شاسع ومتنوع ، وتوفر الدراسة هناك فرصًا لاستكشاف مناطق وثقافات مختلفة.",
      Row: "row-start-[8]"
    },
    {
      Title: "السلامة والأمن",
      Par: "تشتهر روسيا بكونها بلدًا آمنًا وآمنًا ، مع مستويات منخفضة من الجرائم العنيفة ووجود قوي للشرطة.",
      Row: "row-start-[10]"
    }
  ]

  const col2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const HtmlCol1: Array<JSX.Element> = col1.map(({ Title, Par, Row }, i) => {
    return (
      <div key={i} className={`col-start-3 col-end-6 ${Row}`}>

        <div className="lg:hidden col-start-6 col-end-6 flex flex-col items-center select-none">
          <div className="rounded-full w-10 h-10 flex justify-center items-center bg-[#06D6A0] ">
            <p className="text-center">{i + 1}</p>
          </div>
        </div>

        <h1 className='font-Cairo text-xl text-center ' >{Title}</h1>
        <p className='font-Cairo text-sm leading-relaxed text-center font-light px-2 mb-6 lg:px-0 lg:mb-0 '>{Par}</p>
      </div>
    )
  })

  const HtmlCol2: Array<JSX.Element> = col2.map((num, i) => {
    return (
      <div key={i} className="hidden col-start-6 col-end-6 lg:flex flex-col items-center select-none">
        <div className="rounded-full w-10 h-10 flex justify-center items-center bg-[#06D6A0] " >
          <p className="text-center text-[#fff] font-bold">{num}</p>
        </div>
        <TbMinusVertical className="text-[#06D6A0] text-4xl " />
        <TbMinusVertical className="text-[#06D6A0] text-4xl " />
      </div>
    )
  })

  const HtmlCol3: Array<JSX.Element> = col3.map(({ Title, Par, Row }, i) => {
    return (
      <div key={i} className={`col-start-7 col-end-10 ${Row}`}>

        <div className="lg:hidden col-start-6 col-end-6 flex flex-col items-center select-none">
          <div className="rounded-full w-10 h-10 flex justify-center items-center bg-[#06D6A0]" >
            <p className="text-center">{i + 6}</p>
          </div>
        </div>

        <h1 className='font-Cairo text-xl text-center '>{Title}</h1>
        <p className='font-Cairo text-sm leading-relaxed  text-center font-light  px-2 mb-6 lg:px-0 lg:mb-0 ' >{Par}</p>
      </div>
    )
  })

  return (
    <div className='bg-[#26547C] text-[#fff] flex flex-col items-center mt-2'>
      <h1 className=' text-2xl font-bold mt-2'>خدمات ما بعد الطلب</h1>
      <div className="w-full lg:grid grid-cols-11 grid-rows-12 py-4" >

        {HtmlCol1}
        {HtmlCol2}
        {HtmlCol3}
      </div>
    </div>
  );
}

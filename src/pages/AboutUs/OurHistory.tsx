
export default function OurHistory() {

    const info = [
        "تطورت الشركة العائلية الصغيرة وبعد بضع سنوات ،قرر الأطفال الأربعة قيادة شركة البلياردو بعد أن أنهوا تعليمهم العالي.",
        "منذ ذلك الحين ، تخصص فرانسيسكو وسيرجيو وأنابيل وراكيل بشكل تدريجي في مجالات مختلفة متعلقة بأحواض السباحة.",
        "لتزم أعضاؤنا بشدة بالتجديد والتكوين. في الواقع ، تعد GodoPools حاليًا شركة مرجعية في هذا القطاع ، ليس فقط محليًا ",
        "لتزم أعضاؤنا بشدة بالتجديد والتكوين. في الواقع ، تعد GodoPools حاليًا شركة مرجعية في هذا القطاع ، ليس فقط محليًا ",
        "تتطور الشركة باستمرار وتتكيف مع السوق وأحدث تقنياته. يولكن أيضًا على المستوى الوطني."
    ]

    const Htmlinfo: Array<JSX.Element> = info.map((info, i) => {
        return (
            <p key={i} className="mt-2 lg:text-base text-sm ">{info}</p>
        )
    })

    return (
        <div className="bg-[#fff] text-[#26547C] w-full flex flex-col items-center py-4">

            <div className="text-center max-w-[90%]">
                <h1 className="font-bold lg:text-3xl text-2xl">تاريخنا</h1>
                <p className="mt-2 text-xs md:text-base">تطورت الشركة العائلية الصغيرة وبعد بضع سنوات ، قرر الأطفال الأربعة قيادة شركة البلياردو بعد أن أنهوا تعليمهم العالي. منذ ذلك الحين ، تخصص فرانسيسكو وسيرجيو وأنابيل وراكيل بشكل تدريجي في مجالات مختلفة متعلقة بأحواض السباحة.</p>
            </div>

            <div className="max-w-[90%] flex flex-col-reverse md:flex-row justify-between mt-6">

                <div className="md:w-[50%]">
                    <h1 className="font-bold lg:text-3xl text-2xl mb-4" >مدير او مؤسس الشركة</h1>
                    {Htmlinfo}
                </div>

                <img src="/ImgsAboutUs/ManagerPic.webp" alt="manager Pic" className="md:w-[45%] " />

            </div>

        </div>
    );
}

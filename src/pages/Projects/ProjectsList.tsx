
export default function ProjectsList(props: any) {

    const changeMainProject = (i: number) => {
        props.setIndex(i)

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const HtmlProjects: JSX.Element[] = props.projects.map(({ name, imgs }: any, i: number) => {
        return (
            <div key={i} className="bg-[#fff] h-72 w-60 rounded-xl flex flex-col items-center p-1 cursor-pointer" onClick={() => { changeMainProject(i) }}>
                <img src={imgs[0]} alt={`Projcts ${i + 1} main img`} className="h-[90%] object-cover border-2 border-[#06D6A0] rounded-xl " />
                <p className="font-bold border-2 border-[#06D6A0] mt-1 w-full text-center py-1 rounded-ee-xl rounded-es-xl">{name}</p>
            </div>
        );
    });


    return (
        <div>

            <div className="bg-[#fff] flex flex-col items-center  text-[#26547C] py-8">
                <h1 className=" lg:text-3xl text-xl font-extrabold mb-2">مجموعة من المشاريع التي قد عملناها</h1>
                <p className="lg:w-80 text-center md:text-sm text-xs mx-4">انظر إلى كتالوجنا الكبير من حمامات السباحة المخصصة.
                    كل هذه الصور تنتمي إلى مشاريعنا.
                    بركة أحلامك ... موجودة!</p>
            </div>

            <div className="w-full flex justify-center flex-wrap gap-4 p-4 bg-[#364F6B] ">
                {HtmlProjects}
            </div>

        </div>
    );
}

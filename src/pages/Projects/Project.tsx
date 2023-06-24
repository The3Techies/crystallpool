import { useState, useEffect } from "react";


export default function Project(props: any) {

    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(1)


    useEffect(() => {
        const maxIndex = props.projectImgs.length - 1;
        const interval = setInterval(() => {
            setIndex1(prevIndex => {
                if (prevIndex + 2 > maxIndex) {
                    return 0;
                } else {
                    return prevIndex + 2;
                }
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    useEffect(() => {
        const maxIndex = props.projectImgs.length - 1;
        const interval = setInterval(() => {
            setIndex2(prevIndex => {
                if (prevIndex + 2 > maxIndex) {
                    return 1;
                } else {
                    return prevIndex + 2;
                }
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);


    const HtmlDescription: Array<JSX.Element> = props.projectDescription.map((Description: string, index: number) => {
        return (
            <p className=" text-[#fff] lg:text-sm text-xs mg:mx-4 mb-2" key={index}>{Description}</p>
        )
    })


    return (
        <div>
            <div className="w-full md:h-60 h-80 flex flex-col md:flex-row justify-around items-center my-6 gap-2">
                <img src={props.projectImgs[index1]} alt={`Img of project ${index1 + 1}`} className="md:w-[45%] w-[90%] h-full object-cover rounded-2xl" />
                <img src={props.projectImgs[index2]} alt={`Img of project ${index2 + 1}`} className="md:w-[45%] w-[90%] h-full object-cover rounded-2xl " />
            </div>

            <div className="bg-[#364F6B] p-4 rounded-md ">
                {HtmlDescription}
            </div>
        </div>
    );
}

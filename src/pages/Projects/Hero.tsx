export default function Hero(props: any) {

    console.log(props.projectImg)

    return (
        <div className="w-full">
            <div className="h-20 -mt-20 bg-[#26547C] -z-10"></div>
            <div className="relative h-60 flex items-start justify-center border-t-[1px]">
                <h1 className="text-[#fff] font-bold lg:text-4xl md:text-3xl text-2xl z-10 mt-10">{props.projectName}</h1>
                <div className={`absolute inset-0 z-0 bg-[url(${props.projectImg})] object-cover bg-no-repeat bg-top  `}></div>
                <div className="absolute inset-0 z-0 bg-[url(/ImgsProjects/Vector.webp)] object-cover bg-no-repeat bg-top"></div>
            </div>
        </div>
    )
}

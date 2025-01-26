import Image from "next/image";

export default function List({data,index}){
    const borderCss = index%2==0 ?"border-l-[#1eb2d2]":"border-r-[#1eb2d2]"
    return(
        < >
            <div style={{flexDirection: index%2 == 0 ? "row" : "row-reverse"}} className="py-5 max-md:!flex-col flex justify-around">
                
                {data.images.length > 0 && <div className="sm:w-[45vw] max-sm:w-[80vw] overflow-auto">
                    <div className={data.images.length == 1 ? "" :"w-max flex gap-2 justify-center"}>
                    {data.images.map((image, index, arr)=>
                            <Image key={index} src={image} width={arr.length == 1 ? 600 : 200} height={"auto"} alt="game"  className={ borderCss +" border-8 border-b-[#1eb2d2] border-transparent rounded-[20px]"}/>
                    )}
                    </div>
                </div>}


                <div className="w-[40vw] max-sm:w-[80vw] flex items-center">
                    <div className="max-sm:max-h-[300px] overflow-auto text-white hover:bg-black/40 transition-all hover:shadow-xl backdrop-blur-sm bg-black/20 p-5 rounded-xl text-xl text-gray-800 text-justify font-medium">
                        <p className="text-2xl py-5 font-semibold">
                            {data.link ?
                            <a className="underline hover:text-violet-300" href={data.link}>
                                {data.name}
                            </a>
                            :
                            data.name
                            }
                        </p>
                        {data.stack && 
                        <div className="!select-none text-base">
                            <p className=" font-semibold text-slate-300">Tech Stack</p>
                            <div className="flex flex-wrap gap-3 py-2">
                                {data.stack.map((skill, index)=>
                                    <p key={index} className="text-sm p-2 border-2 border-slate-600 rounded-[10px] text-slate-400 bg-slate-800">
                                        {skill}
                                    </p>
                                )}
                            </div>
                        </div>}
                        <p className="text-base">
                            {data.content}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

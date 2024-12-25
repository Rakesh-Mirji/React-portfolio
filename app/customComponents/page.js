'use client'
import React, { useState } from "react";
import Navigator from "../components/navigatior.js";
import VideoPlayer from "../components/videoPlayer.js";
import AudioPlayer from "../components/audioPlayer.js";
import TimePicker from "../components/timePicker/timer.js";
import { videoSrc, videoComp, audioSrc, audioComp, timeData, pickerComp, bmiComp } from "@/public/data/projectData.js";
import Bar from "../../public/Bar.svg"
import Image from "next/image.js";
import BMI from "../components/BMI/display";

export default function CustomComponent(){

    const [state, setstate] =  useState(timeData)

    return(<>
    <div className="flex justify-center">
    <Navigator page={"/customComponents"}/>
    </div>

    <div className="p-10 overflow-x-hidden flex flex-col gap-14 ">
        <div className="p-5 w-screen flex justify-between items-center ">
            <div className="w-1/4 max-md:hidden"></div>
            <h1 className="text-4xl lg:text-5xl pt-10 font-semibold">Custom Components</h1>
            <Image src={Bar} alt="bar" className="max-md:hidden"/>
        </div>        
        <div className="lg:flex gap-10">
            <Detail data={audioComp}/>
            <div className="lg:max-w-[50vw] ">
                <AudioPlayer src={audioSrc}/>
            </div>
        </div>
        <div className="lg:flex flex-row flex-row-reverse gap-10">
            <Detail data={videoComp}/>
            <div className="lg:max-w-[50vw]">
                <VideoPlayer src={videoSrc}/>
            </div>
        </div>
        <div className='flex flex-col items-center' >
            <Detail data={pickerComp}/>
            <div className="hover:border-2 border-[#244f75] bg-[#1b2a36] flex justify-center items-center h-[10vh] w-[50vw] rounded-[10px]" >
                <div className='w-[100px]' >
                    <TimePicker setState={setstate} state={state} />
                </div>
            </div>
        </div>
        <div className="p-2 lg:flex gap-10 justify-around">
            <div className="lg:w-[45vw]">
                <Detail data={bmiComp}/>
            </div>
            <div className="-mx-8 lg:w-[40vw] ">
                <BMI/>
            </div>
        </div>
    </div>
    </>)
}

function Detail({data}){
    return(
        <div className="text-justify font-medium md:text-xl">
            <p className="text-2xl py-5 font-semibold">
                {data.name}
            </p>
            <p className="">
                {data.content}
            </p>
            {data.attributes  && <p className="pt-4 font-semibold text-slate-300">Attributes :</p>}
            {data.attributes  && Object.entries(data.attributes).map((elem, index)=>
                <div key={index} className="text-start md:pl-10 flex gap-2 p-2">
                    <p className="text-sm p-2 h-min w-28 border-2 border-slate-600 rounded-[10px] text-slate-300 bg-slate-800">{`${elem[0]}:`}</p>
                    <p className="p-2">{elem[1]}</p>
                </div>
            ) 
            }
        </div>
    )
}
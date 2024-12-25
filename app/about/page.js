'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Profile from '../../public/img1.png'
// import Profile from '../../public/me1.png'
import Profile from '../../public/home_svg.svg'
import Navigator from "../components/navigatior";
import Bar from "../../public/Bar.svg"
import { skills } from "@/public/data/projectData";

export default function About(){
    const pageTitle = "About Me";

    const tags = [...new Set(skills.map(e=>e.tag))]

    const identity = {
    firstName: "Rakesh Mirji",
    country: "India",
    occupation: "Software Developer",
    hobbies: ["photography", "Gaming", "coding"], 
    about:`I am passionate about using technology to solve complex  problems  and  
    create  innovative  solutions. I am proficient in languages such as JavaScript, python, GoLang 
    and have experience working with various frameworks such as chi, ReactJS , NodeJS and 
    python frameworks such as Flask I am a creative problem solver with excellent
    analytical skills. I enjoy working collaboratively and thrive in team environments.
    I am always eager to learn and stay up-to-date with the latest trends and advancements
    in the field of computer science.`
    
    };


    return(<>
    <div className="flex justify-center">
    <Navigator page={"/about"}/>
    </div>
    <div className="p-2 py-10 max-md:!block flex items-center justify-around">
        {/* <Image src={Bar} className="max-md:hidden"/> */}
        <Image src={Profile} width={400} height={100} alt='profile' className="max-sm:px-10 object-contain"/>
        <div className="hover:bg-black/30 group backdrop-blur-sm bg-black/20 max-md:!border-transparent max-md:w-[95vw] text-2xl p-10 w-[40vw] text-justify rounded-[20px] transition duration-400 border-4 border-[#244f75] border-r-[#1eb2d2] border-b-[#1eb2d2] hover:border-[#1b2a36]">
            {/* <h1 className="text-5xl font-semibold italic">{pageTitle}</h1> */}
            <h2 className="pt-2">Hello, This is</h2>
            <h3 className="pb-5">{identity.firstName}</h3>
            <h3 className="text-lg font-mormal text-slate-200">{identity.about}</h3>
        </div>
    </div>
    {tags.map((tag, tIndex)=>
    <div key={tIndex} className="p-5 text-base font-medium max-md:!block flex gap-5">
        <h3 className="font-medium">{tag} : </h3>
        <ol className="max-md:text-sm flex flex-wrap max-md:gap-5 gap-10">
        {skills.filter((e)=>e.tag == tag).map((skill,index) => 
        <li key={index} className={` border-2 border-black hover:border-[#244f75] text-white hover:bg-opacity-30 rounded-lg p-2 px-4  transition duration-500  ${"bg-[#244f75]"} `} >
            {skill.option}
        </li>)}
        </ol>
    </div>)}
    </>)
}
'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Profile from '../../public/img1.png'



export default function About(){
    const pageTitle = "About Me";

const identity = {
  firstName: "Rakesh",
  country: "India",
  occupation: "Software Developer",
  hobbies: ["photography", "Gaming", "coding"],
  
};
const skills = [{option:"HTML",background:'bg-red-700'},{ option:"CSS",background:'bg-blue-700'}, {option:"JavaScript",background:'bg-green-700'},{option:"ReactJS",background:'bg-purple-700'},{option:"NextJS",background:'bg-yellow-700'},{ option:"Python",background:'bg-pink-700'},{option:"Flask",background:'bg-indigo-700'},{option:"GoLang",background:'bg-blue-500'},{option:"Linux",background:'bg-sky-500'},{option:"Git",background:'bg-orange-500'}];

    return(<>
    <div className="flex justify-center">
        <div className="flex h-14 justify-center gap-24 p-20 items-center w-[50vw]">
        <Link href='/' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700'>Home</Link>
        <Link href='/project' className='font-semibold text-2xl hover:text-blue-700 hover:border-b-4 hover:border-blue-700'>Projects</Link>
      </div>
    </div>
    <div className="max-md:!block flex justify-around">
        <Image src={Profile} width={400} height={100} alt='profile' className=" object-contain"/>
        <div className="hover:bg-white/40 group backdrop-blur-sm bg-white/30 max-md:!border-transparent max-md:w-[95vw] text-3xl p-10 w-[40vw] text-justify border-2 rounded-[20px] transition duration-400 hover:border-black">
            <h1 className="text-5xl pt-10 font-semibold italic">{pageTitle}</h1>
            <h2 className="py-10">HI THERE !</h2>
            <h3 className="py-10">My name is <em className="italic">{identity.firstName}.</em></h3>
            <h3 className="group-hover:text-black text-xl font-mormal text-gray-800">I am passionate about using technology to solve complex  problems  and  
                create  innovative  solutions. I am proficient in languages such as JavaScript, python, GoLang 
                and have experience working with various frameworks such as chi, ReactJS , NodeJS and 
                python frameworks such as Flask I am a creative problem solver with excellent
                analytical skills. I enjoy working collaboratively and thrive in team environments.
                I am always eager to learn and stay up-to-date with the latest trends and advancements
                in the field of computer science.</h3>
        </div>
    </div>
    <div className="p-10 text-xl font-medium max-md:!block flex gap-10 items-center">
        <h3>Skill : </h3>
        <ol className="flex flex-wrap max-md:gap-5 gap-10">
        {skills.map((skill,index) => <li key={index} className={`outline  border-2 text-white hover:text-gray-600 hover:bg-opacity-20 rounded-lg p-4  transition duration-500  ${skill.background} `} >{skill.option}</li>)}
        </ol>
    </div>
    </>)
}
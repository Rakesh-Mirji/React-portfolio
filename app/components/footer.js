"use client"
import { options } from "./navigatior"
import { useState, useEffect } from "react"

export default function Footer(){
    const contact = {
        phone:"9945575310",
        email:"rakeshmirji@gmail.com",
        address:"Hubballi",
        state:"Karnataka"
    }
    const name =`Rakesh Mirji`
    const about =`I am a Software Engineer from Hubbali, Karnataka, specializing in creating web applications with unique designs and excellent performance.`

    const[project, setProject] = useState(true)

    useEffect(() => {
        // Make sure this code runs only on the client side
        if (typeof window !== 'undefined') {
            console.log(window.location.href, window.location.href.includes("/collection"))
           ; // Access the full URL
          setProject( !window.location.href.includes("/collection"))
        }
      }, []);

    return(
        <>
        <div className="max-md:hidden w-full font-sm bg-black/60">
            {project && <div className="flex justify-around ">
                <div className="max-w-[25vw] font-semibold text-xl">
                    <p className="p-4">{name}</p>
                    <p className="font-medium text-base">{about}</p>
                </div>
                <div>
                    <p className="font-semibold p-4">Useful Links</p>
                    <div className="flex flex-col justify-center items-center font-medium gap-2">
                    {options.map((elem,index)=>
                        <a key={index} href={elem.link} className='hover:text-[#1eb2d2]'>{elem.name}</a>
                    )}
                    </div>
                </div>
                <div className="">
                    <p className="p-4 font-semibold text-xl">Contact Info</p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                    <p>{contact.address}</p>
                    <p>{contact.state}</p>
                </div>
            </div>}
            <p>Copyright ©2024 Rakesh Mirji.All Rights Reserved | Designed by Rakesh | Email : rakeshmirji@gmail.com</p>
        </div>
        </>
    )
}
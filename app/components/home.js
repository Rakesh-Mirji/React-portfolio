import Image from 'next/image'
// import Profile from '../../public/IMG_20230701_152513-removebg-preview.png'
import Profile from '../../public/me2.png'
// import Profile from '../../public/home_svg.svg'
import Navigator from './navigatior'
export default function Home(){
    const urls = [
        {
            link:"https://github.com/Rakesh-Mirji",
            name:"GitHub"
        },
        {
            link:"https://www.linkedin.com/in/rakesh-mirji-26339b1b1",
            name:"LinkedIn"
        },
        {
            link:"https://www.medium.com/@rakeshmirji",
            name:"Medium"
        },
    ]

    return(
        <>
      <Navigator page={"/"}/>
      <div className="max-md:!block flex items-center gap-24">
        <Image className='object-cover rounded-full'
          src={Profile}
          alt="Logo"
          width={300}
          height={300} 
        />
        <div>
          <h2 className='max-md:text-2xl max-md:text-left mt-10 font-semibold text-5xl text-right'>Welcome</h2>
          <h2 className='max-md:text-2xl mb-10 font-semibold text-5xl'>To My Portfolio</h2>
        </div>
      </div>

       <Links socialMedia={urls}/>
    </>
    )
}

function Links({socialMedia}){
    return(
        <>
      <div className="flex flex-wrap gap-x-5 text-center lg:mb-0 lg:text-left">
        {socialMedia.map((data, index)=>
        <a key={index}
          href={data.link}
          className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="px-5 py-4 mb-3 text-2xl font-semibold">
            {`${data.name} `}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>)}
      </div>
        </>
    )
}
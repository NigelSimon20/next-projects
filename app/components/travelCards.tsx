import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { StaticImageData } from 'next/image'
import Link from 'next/link';
import Image from 'next/image'


interface CardDetails{
    cardimg: StaticImageData,
    cardtitle: string,
    cardsubtitle: string,
    cardtext: string,
    cardlink: string,
    carddate: string,
}

const TravelCard = ({cardimg, cardsubtitle, cardlink, carddate, cardtext, cardtitle}: CardDetails) => {
  return (
    <div className='px-5 md:flex justify-evenly items-center md:mx-10 lg:mx-40 border-b py-8'>
        <Image src={cardimg} alt="pic" className='w-[100%] mb-4 md:h-[350px] md:w-[250px] object-cover md:mr-20 rounded-lg md:mb-0'/>
        <div>
            <div className="flex items-center mb-2">
            <FaLocationDot className='text-[#F55A5A] text-[20px] mr-2'/>
            <h3 className='mr-3'>{cardsubtitle}</h3>
            <Link href={cardlink} className='text-[#918E9B] underline' target='_blank'>View on Google Maps</Link>
            </div>
            <h1 className='md:font-extrabold text-[40px] mb-5'>{cardtitle}</h1>
            <h4 className='md:font-bold mb-5'>{carddate}</h4>
            <p>{cardtext}</p>
        </div>
    </div>
  )
}

export default TravelCard
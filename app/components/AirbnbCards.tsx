import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { StaticImageData } from 'next/image';

interface CardDetails{
    image: StaticImageData,
    buttontext: string,
    rating: string,
    quantity: number,
    country: string,
    text: string,
    priceBold: string,
    priceText: string,

}

const AirbnbCards = ({image, buttontext, rating, quantity, country, text, priceBold, priceText}: CardDetails) => {
  return (
    <div>
        <div className="h-[350px] w-[300px] relative">
        <Image src={image} alt="airbnb-image" className='h-[350px] w-[100%] rounded-lg object-cover' />
        <button className='bg-white text-black py-[5px] px-[15px] absolute top-[15px] left-[15px] rounded-md'>{buttontext}</button>
        </div>
        <div className="flex items-center mt-3 space-x-1 text-[18px] md:font-thin mb-[10px]">
        <FaStar className='text-[#FE395C]'/>
        <p>{rating}</p>
        <p className='text-[#918E9B]'>({quantity})</p>
        <p className='text-[#918E9B]'>.</p>
        <p className='text-[#918E9B]'>{country}</p>
        </div>
        <p className=' text-[18px] mb-[10px]'>{text}</p>
        <p className=' text-[18px]'><span className='md:font-bold'>From {priceBold}</span> / {priceText}</p>
    </div>
  )
}

export default AirbnbCards
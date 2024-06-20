import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Image{
  img: StaticImageData,
}

const AirbnbHero = ({img} : Image) => {
  return (
    <Image src={img} alt="image" className='w-[100%] md:h-[250px] md:w-[200px] object-cover mb-5 rounded-lg' />
  )
}

export default AirbnbHero
import React from 'react'
import Image from 'next/image'
import one from '../../public/images/laurasmith.png'


const AirbnbHero = () => {
  return (
    <Image src={one} alt="image" className='h-[250px] w-[200px] object-cover mb-5 rounded-lg' />
  )
}

export default AirbnbHero
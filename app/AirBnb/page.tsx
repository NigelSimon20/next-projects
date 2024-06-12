'use client';

import React from 'react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules';
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AirbnbHero from '../components/AirbnbHero'
import logo from '../../public/images/airbnb-logo.png'
import AirbnbCards from '../components/AirbnbCards'
import wedding from '../../public/images/wedding.png'

SwiperCore.use([Autoplay]);

const AirBnb = () => {
  return (
    <div>
    <nav className='shadow-lg'>
      <Image src={logo} alt="logo" className='w-[15%] ml-16' />
    </nav>

    <div className="flex items-center justify-center space-x-5">
      <AirbnbHero />
      <div>
      <AirbnbHero />
      <AirbnbHero />
      </div>
      <div className='mt-40'>
      <AirbnbHero />
      <AirbnbHero />
      </div>
      <div>
      <AirbnbHero />
      <AirbnbHero />
      </div>
      <div className='mt-40'>
      <AirbnbHero />
      <AirbnbHero />
      </div>
    </div>

    <h1 className='md:font-extrabold text-[60px] ml-[90px] my-5'>Online Experiences</h1>
    <p className='ml-[90px] text-[22px]'>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.</p>

    <div className="flex ml-[90px] mt-[50px]">

<Swiper spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>

<SwiperSlide>
<AirbnbCards 
      image={wedding}
      buttontext='SOLD OUT'
      rating='5.0'
      quantity={6}
      country='USA'
      text='Life lessons with Katie Zaferes'
      priceBold='$136'
      priceText='person'
      />
</SwiperSlide>

<SwiperSlide>
<AirbnbCards 
      image={wedding}
      buttontext='ONLINE'
      rating='4.4'
      quantity={14}
      country='USA'
      text='Learn wedding photography'
      priceBold='$125'
      priceText='person'
      />
</SwiperSlide>

<SwiperSlide>
<AirbnbCards 
      image={wedding}
      buttontext='SOLD OUT'
      rating='5.0'
      quantity={6}
      country='USA'
      text='Life lessons with Katie Zaferes'
      priceBold='$136'
      priceText='person'
      />
</SwiperSlide>

<SwiperSlide>
<AirbnbCards 
      image={wedding}
      buttontext='ONLINE'
      rating='5.0'
      quantity={6}
      country='USA'
      text='Life lessons with Katie Zaferes'
      priceBold='$136'
      priceText='person'
      />
</SwiperSlide>

</Swiper>

    </div>
    </div>
  )
}

export default AirBnb
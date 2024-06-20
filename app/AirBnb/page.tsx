'use client';

import React from 'react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules';
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import one from '../../public/images/laurasmith.png'
import AirbnbHero from '../components/AirbnbHero'
import logo from '../../public/images/airbnb-logo.png'
import AirbnbCards from '../components/AirbnbCards'
import wedding from '../../public/images/wedding.png'

SwiperCore.use([Autoplay]);

const AirBnb = () => {
  return (
    <div>
    <nav className='shadow-lg'>
      <Image src={logo} alt="logo" className='w-[40%] md:w-[15%] ml-[16px] md:ml-16' />
    </nav>

    <div className="md:flex items-center justify-center md:space-x-5 text-center px-5">
      <AirbnbHero img={one}/>
      <div>
      <AirbnbHero img={one}/>
      <AirbnbHero img={one}/>
      </div>
      <div className='md:mt-40'>
      <AirbnbHero img={one}/>
      <AirbnbHero img={one}/>
      </div>
      <div>
      <AirbnbHero img={one}/>
      <AirbnbHero img={one}/>
      </div>
      <div className='md:mt-40'>
      <AirbnbHero img={one}/>
      <AirbnbHero img={one}/>
      </div>
    </div>

    <h1 className='text-[40px] font-extrabold md:text-[60px] ml-[20px] md:ml-[90px] my-5'>Online Experiences</h1>
    <p className='ml-[20px] md:ml-[90px] text-[22px]'>Join unique interactive activities led by <br /> one-of-a-kind hosts—all without leaving <br /> home.</p>

    <div className="flex ml-[90px] mt-[50px]">

    <Swiper spaceBetween={40} slidesPerView={3}
    breakpoints={{
      360: {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
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
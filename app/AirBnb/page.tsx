'use client';

import React from 'react'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules';
import SwiperCore from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import one from '../../public/images/1.jpg'
import two from '../../public/images/2.jpg'
import three from '../../public/images/3.jpg'
import four from '../../public/images/4.jpg'
import five from '../../public/images/5.jpg'
import six from '../../public/images/6.jpg'
import seven from '../../public/images/7.jpg'
import eight from '../../public/images/8.jpg'
import nine from '../../public/images/9.jpg'
import AirbnbHero from '../components/AirbnbHero'
import logo from '../../public/images/airbnb-logo.png'
import AirbnbCards from '../components/AirbnbCards'
import wedding from '../../public/images/wedd.jpg'
import bike from '../../public/images/bike.jpg'
import slidd from '../../public/images/slidd.jpg'
import swim from '../../public/images/swim.jpg'


const AirBnb = () => {
  return (
    <div>
    <nav className='shadow-lg'>
      <Image src={logo} alt="logo" className='w-[40%] md:w-[15%] ml-[16px] md:ml-16' />
    </nav>

    <div className="md:flex items-center justify-center md:space-x-5 text-center px-5">
      <AirbnbHero img={one}/>
      <div>
      <AirbnbHero img={two}/>
      <AirbnbHero img={three}/>
      </div>
      <div className='md:mt-40'>
      <AirbnbHero img={four}/>
      <AirbnbHero img={five}/>
      </div>
      <div>
      <AirbnbHero img={six}/>
      <AirbnbHero img={seven}/>
      </div>
      <div className='md:mt-40'>
      <AirbnbHero img={eight}/>
      <AirbnbHero img={nine}/>
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
      image={swim}
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
      image={bike}
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
      image={slidd}
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
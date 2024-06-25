import React from 'react'
import japan from '../../public/images/japan.jpg'
import jord from '../../public/images/jord.jpg'
import house from '../../public/images/house.jpg'
import { FaEarthEurope } from "react-icons/fa6";
import TravelCard from '../components/travelCards';

const travelJournal = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#F55A5A] py-5 text-white mb-20">
      <FaEarthEurope className='mr-2 text-[25px]' />
      <p>my travel journal.</p>
      </div>

      <TravelCard 
      cardimg = {japan}
      cardsubtitle='JAPAN'
      cardlink='https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'
      cardtitle='Mount Fuji'
      carddate='12 Jan, 2021 - 24 Jan, 2021'
      cardtext='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
      />

      
    <TravelCard 
      cardimg = {house}
      cardsubtitle='AUSTRALIA'
      cardlink='https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu'
      cardtitle='Sydney Opera House'
      carddate='27 May, 2021 - 8 Jun, 2021'
      cardtext='The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings'
      />

      
    <TravelCard 
      cardimg = {jord}
      cardsubtitle='NORWAY'
      cardlink='https://www.google.com/maps/place/Geirangerfjord/@62.1047507,6.9098347,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu'
      cardtitle='Geirangerfjord'
      carddate='01 Oct, 2021 - 18 Nov, 2021'
      cardtext='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
      />  

    </div>
  )
}

export default travelJournal
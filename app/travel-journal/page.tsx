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
      cardlink='https://source.unsplash.com/WLxQvbMyfas'
      cardtitle='Mount Fuji'
      carddate='12 Jan, 2021 - 24 Jan, 2021'
      cardtext='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
      />

      
    <TravelCard 
      cardimg = {house}
      cardsubtitle='AUSTRALIA'
      cardlink='https://source.unsplash.com/JmuyB_LibRo'
      cardtitle='Sydney Opera House'
      carddate='27 May, 2021 - 8 Jun, 2021'
      cardtext='The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings'
      />

      
    <TravelCard 
      cardimg = {jord}
      cardsubtitle='NORWAY'
      cardlink='https://source.unsplash.com/3PeSjpLVtLg'
      cardtitle='Geirangerfjord'
      carddate='01 Oct, 2021 - 18 Nov, 2021'
      cardtext='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'
      />  

    </div>
  )
}

export default travelJournal
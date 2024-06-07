import React from 'react'
import { 
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn,
    FaLinkedin
    } from 'react-icons/fa6'

    interface linkedDisplay{
        display: string;
    }

const CardFooter = ({display}: linkedDisplay) => {
  return (
    <div className='flex bg-[#161617] py-10 items-center justify-center space-x-4 mt-10'>
        <div className='bg-[#918E9B] h-10 w-10 flex items-center justify-center text-[#161617] rounded-lg'>
            <FaTwitter className='text-[25px]'/>
        </div>
        <div className='bg-[#918E9B] h-10 w-10 flex items-center justify-center text-[#161617] rounded-lg'>
            <FaFacebookF className='text-[25px]'/>
        </div>
        <div className='bg-[#918E9B] h-10 w-10 flex items-center justify-center text-[#161617] rounded-lg'>
            <FaInstagram className='text-[25px]'/>
        </div>
        <div className='bg-[#918E9B] h-10 w-10 flex items-center justify-center text-[#161617] rounded-lg'>
            <FaGithub className='text-[25px]'/>
        </div>
        <div className={`bg-[#918E9B] h-10 w-10 flex items-center justify-center text-[#161617] rounded-lg ${display}`}>
            <FaLinkedinIn className='text-[25px]'/>
        </div>
    </div>
  )
}

export default CardFooter
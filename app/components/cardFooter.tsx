import React from 'react'
import { 
    FaTwitter,
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedinIn
    } from 'react-icons/fa6'

const CardFooter = () => {
  return (
    <div className='flex bg-[#161619] py-16'>
        <div className='bg-[#918E9B] h-10 w-10'>
            <FaTwitter />
        </div>
    </div>
  )
}

export default CardFooter
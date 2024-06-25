import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button'
import CardFooter from './cardFooter'
import laurasmith from '../../public/images/laurasmith.png'

interface display{
    style: string,
    block: string
}

const Card = ({style, block}: display) => {
  return (
    <div className='bg-[#1A1B21] md:w-[40%] lg:w-[30%] text-white rounded-lg mb-5'>
        <Image src={laurasmith} alt="smith" className='object-cover w-[100%] mb-6' />
        <div className='px-10'>
        <h1 className='text-center mb-2 md:font-bold text-2xl'>Nigel Simon</h1>
        <p className='text-orange-300 text-center mb-2 text-sm'>Software Engineer</p>
        <Link href='/' className='text-center mb-6 block text-sm'>NigelSimon.com</Link>

        <div className="flex space-x-9 justify-center mb-5">
        <Button text='Email' bgColor='black' color='white' />
         <div className={`${style}`}>
         <Button text='LinkedIn' bgColor='black' color='white' />
         </div>
        </div>

        <h2 className='text-lg md:font-bold mb-3'>About</h2>
        <p className='text-sm mb-5'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className='text-lg md:font-bold mb-3'>Interest</h2>
        <p className='text-sm'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <CardFooter display={`${block}`}/>
    </div>
  )
}

export default Card
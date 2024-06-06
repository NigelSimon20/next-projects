import Link from 'next/link'
import { FaBug } from "react-icons/fa6"
import React from 'react'

const NavBar = () => {
    const links = [
        {label: 'Business Cards', href: '/'},
        {label: 'Travel Journal', href: '/travel-journal'},
        {label: 'Tenzies', href: '/tenzies'},
        {label: 'Van Life', href: '/vanlife'},
        {label: 'Quiz Generator', href: '/quiz-generator'},
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center justify-center bg-black'>
        <Link href="/"><FaBug /></Link>
        <ul className='flex space-x-6 '>
            {links.map(link => <Link 
            key={link.href} 
            className='text-zinc-500 hover:text-zinc-800 transition-colors' 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}


export default NavBar
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const links = [
        {label: 'Business Cards', href: '/'},
        {label: 'Travel Journal', href: '/travel-journal'},
        {label: 'Airbnb', href: '/AirBnb'},
        {label: 'Tenzies', href: '/tenzies'},
        {label: 'Quiz Generator', href: '/quiz-generator'},
    ]
  return (
    <nav className='flex space-x-6 border-b py-5 px-5 h-14 items-center justify-center bg-black'>
        <ul className='flex space-x-6'>
            {links.map(link => <Link 
            key={link.href} 
            className='text-zinc-200 hover:text-zinc-500 transition-colors' 
            href={link.href}>{link.label}</Link>)}
        </ul>
    </nav>
  )
}


export default NavBar
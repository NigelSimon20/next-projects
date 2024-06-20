'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: 'Business Cards', href: '/' },
        { label: 'Travel Journal', href: '/travel-journal' },
        { label: 'Airbnb', href: '/AirBnb' },
        { label: 'Tenzies', href: '/tenzies' },
        { label: 'Quiz Generator', href: '/quiz-generator' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black border-b py-2 px-4 md:px-10 h-14 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/" className="text-zinc-200 hover:text-zinc-500 transition-colors">
                Nigel Simon
                </Link>
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-zinc-200 hover:text-zinc-500 focus:outline-none"
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-6">
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-zinc-200 hover:text-zinc-500 transition-colors">
                      {link.label}
                    </Link>
                ))}
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-14 left-0 right-0 bg-black">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="text-zinc-200 hover:text-zinc-500 transition-colors"
                            onClick={toggleMenu}>
                              {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

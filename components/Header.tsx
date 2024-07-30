'use client'
import { useState } from 'react';
import Image from 'next/image';
import ShimmerButton from '@/components/magicui/shimmer-button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-3 z-30 w-screen fixed px-5 bg-white bg-opacity-[0.02] shadow-sm backdrop-blur-sm">
      <div className="w-20">
        <Image
          src="/logo.png"
          alt="logo"
          className="object-cover"
          width={100}
          height={100}
        />
      </div>
      
      <nav className="hidden lg:flex">
        <ul className="flex gap-8 text-lg font-bold">
          <li>ACTUS</li>
          <li>CALENDRIERS</li>
          <li>CLASSEMENT</li>
          <li>CHAMPIONSHIP</li>
          <li>SOUVENIRS</li>
        </ul>
      </nav>

      <div className="flex lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      <ShimmerButton className="shadow-2xl hidden lg:block">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Major Ticket
        </span>
      </ShimmerButton>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900 lg:hidden h-[100vh]">
          <div className="flex items-center justify-end p-4">
            <button onClick={closeMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center h-full">
            <li className="py-2 text-lg font-bold"><a href="#">ACTUS</a></li>
            <li className="py-2 text-lg font-bold"><a href="#">CALENDRIERS</a></li>
            <li className="py-2 text-lg font-bold"><a href="#">CLASSEMENT</a></li>
            <li className="py-2 text-lg font-bold"><a href="#">CHAMPIONSHIP</a></li>
            <li className="py-2 text-lg font-bold"><a href="#">SOUVENIRS</a></li>
            <ShimmerButton className="mt-4">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Major Ticket
              </span>
            </ShimmerButton>
          </ul>
        </div>
      )}
    </header>
  );
}

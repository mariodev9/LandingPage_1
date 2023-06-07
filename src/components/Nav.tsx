import React from 'react'
import { ButtonNav } from './common/ButtonNav'
import { Syne } from 'next/font/google'
import { motion } from 'framer-motion';

const syne = Syne({
    weight: '600',
    subsets: ['latin'],
  });

const NavLinkList = [
    "Home Page",
    "About",
    "Portfolio"
]

export default function Nav() {
  return (
    <motion.div initial={{y: -50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.8}} className='bg-primary px-1 rounded w-full flex py-1 justify-between max-w-screen-2xl  h-14 '>
        <div className='flex gap-7 items-center ' >
        {/* logo */}
            <div className='flex justify-center items-center rounded-md bg-black h-full px-20 '>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="12" viewBox="0 0 13 8" fill="none">
                    <path d="M12.2929 4L8.79289 7.5H0.5V0.5H8.79289L12.2929 4Z" fill="#fff" stroke="black"/>
                </svg>
                <h1 className={`text-white sm:text-sm md:text-md lg:text-lg  text-medium ${syne.className} uppercase`}>Facture</h1>
            </div>

        {/* Nav Links */}
        {NavLinkList.map(navlink => (
            <a  key={navlink} className='text-sm font-medium nav-link'>{navlink}</a>
        ))}

        </div>

        <div className='flex gap-1'>
            {/* solutions */}
            <ButtonNav text='Solutions' arrow={false}/>
            {/* get started */}
            <ButtonNav text='Get Started' arrow={true}/>
        </div>
    </motion.div>
  )
}

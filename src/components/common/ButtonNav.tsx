import React, { useState } from 'react'
import { ArrowIcon } from './Icons/ArrowIcon'
import { motion } from 'framer-motion'

interface ButtonNavProps {
  text: string
  arrow: boolean
}

export const ButtonNav: React.FC<ButtonNavProps> = ({text,arrow}) => {

  const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <motion.div animate={{backgroundColor: isHover ? "#000" : ""  }} onHoverStart={()=>setIsHover(true)} onHoverEnd={()=>setIsHover(false)} className='flex justify-center items-center rounded-md border border-black h-full px-5 cursor-pointer'>
        <motion.h1 animate={{color: isHover ? "#fff" : "#000"  }} className=' font-medium'>{text}</motion.h1>
        {arrow && <ArrowIcon isHover={isHover}/>}
  </motion.div>
  )
}


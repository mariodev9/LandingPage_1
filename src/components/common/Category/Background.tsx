import React from 'react'
import { motion } from 'framer-motion'

interface Props {
    isHover: boolean
    imageUrl: string
}

export const Background:React.FC<Props> = ({isHover, imageUrl}) => {

  return (
    <>

    <motion.div 
      initial={{ opacity: 0}} 
      animate={{opacity: isHover ? 1 : 0, scale: isHover ? 1.1 : 1}} 
      transition={{ duration: 0.8, type: "spring"}} 
      className={`${imageUrl} bg-cover relative w-full h-full z-30`}
      />
      
      </>
    )
}

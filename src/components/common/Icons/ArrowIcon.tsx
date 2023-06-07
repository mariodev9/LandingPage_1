import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  isHover: boolean
}

export const ArrowIcon:React.FC<Props> = ({isHover}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <motion.path 
        d="M16 12L12 8M16 12L8 12M16 12L12 16"  
        animate={{stroke: isHover ? "#fff" : "#000", x:isHover ? 4 : 0 }} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"/>
    </svg>
  )
}

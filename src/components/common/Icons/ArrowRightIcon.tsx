import React from 'react'

interface Props {
  isHover: boolean
}

export const ArrowRightIcon:React.FC<Props> = ({isHover}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
    >
        <path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" fill={isHover ? "#fff" : "#000"} stroke={isHover ? "#fff" : "#000"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 12L12 8M16 12L8 12M16 12L12 16" stroke={isHover ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

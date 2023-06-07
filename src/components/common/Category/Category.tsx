import React, { useState } from 'react'
import { Tulpen_One } from 'next/font/google'
import { ArrowRightIcon } from '../Icons/ArrowRightIcon';
import { motion } from 'framer-motion';
import { Background } from './Background';

const tulpen = Tulpen_One({
  weight: '400',
  subsets: ['latin'],
});

interface CategoryProps {
    position: number
    title: string
    description: string
    image: string
}

export const Category:React.FC<CategoryProps> = ({position, title, description, image}) => {

    const [isHover, setIsHover] = useState<boolean>(false)

  return (
    <motion.div  
        onHoverStart={()=> setIsHover(true)}  
        onHoverEnd={()=> setIsHover(false)}
    >
        <div className='relative h-96 md:h-tablet lg:h-screen cursor-pointer flex justify-center items-center border-y md:border lg:border-x lg:border-y-0 border-black overflow-hidden'>
            <Background isHover={isHover} imageUrl={image} />
            <div className='absolute w-full h-full z-40 flex flex-col justify-end p-5 pt-20'>
                <div className='flex-1 '>
                    <div className='h-full flex items-center justify-center'>
                        <motion.h1 
                            initial={{y: 30, opacity: 0}} 
                            animate={{color: isHover ? "#fff" : "#000", y: 0 , opacity: 1}} 
                            transition={{duration: 1, type: "spring", opacity: {
                                delay: position*0.10,
                                duration: 1,
                                type: "spring"
                            },y: {
                                delay: position*0.10,
                                duration: 1,
                                type: "spring"
                            }}} 
                            className={` text-center text-9xl md:text-10xl lg:text-11xl ${tulpen.className} leading-none` }
                        >
                            {position}
                        </motion.h1>
                    </div>
                </div>

                <div className='flex w-full '>
                    <motion.div  animate={{borderColor: isHover ? "#fff" : "#000", color: isHover ? "white" : "black" }} className=' border rounded-full px-2 leading-5 uppercase'>
                        {title}
                    </motion.div>
                </div>
                <div className='flex  w-full justify-between items-end mt-10'>
                    <motion.div animate={{color: isHover ? "#fff" : "#000"}} className=' border-black font-medium w-40'>
                        {description}
                    </motion.div>
                    <div className=' border-black font-medium '>
                        <ArrowRightIcon isHover={isHover}/>
                    </div>
                </div>
            </div>
        </div>

    </motion.div>

  )
}
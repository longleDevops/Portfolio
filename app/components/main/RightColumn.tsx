"use client"
import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion"
import {slideInFromBottom } from '@/utils/motion'

const RightColumn = () => {
  return (
    <motion.div 
    initial="hidden"
    animate="visible"
    className="md:mt-[50px] flex justify-center md:w-[50%] min-h-[45%]">
      <div className="border-4 border-black h-[500px] rounded-full">
        <motion.div
          variants={slideInFromBottom(0)}
        >
        <Image
          src="/profile-img-2.png"
          alt="profile image"
          height={500}
          width={500}
          className="rounded-full min-h-[490px]"
        />

        </motion.div>
      </div>
    </motion.div>
  )
}

export default RightColumn
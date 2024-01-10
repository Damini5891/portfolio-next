import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <MotionLink href="/"
      className='h-16 w-16 bg-dark text-light rounded-full flex justify-center items-center text-2xl font-bold border boder-transparent dark:border-light'
    whileHover={{
      backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
      transition:{duration:1, repeat:Infinity}
    }}
      >
      DR</MotionLink>
    </div>
  )
}

export default Logo

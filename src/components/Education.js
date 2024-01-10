import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details =({type, name, time, place, info }) =>{
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl'>{type}&nbsp; from &nbsp;<span className='text-primary'>{name}</span></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>
            <p className='font-medium  w-full'>{info}</p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>Education</h2>
      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
        style={{scaleY:scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
          type="Masters of Technology (CSE)" name="Banasthali Vidyapith"
          time="2021-2023" place="Jaipur, Rajasthan" 
          info="First Divison with 7.99 CGPA"
          />
            <Details
          type="Bachelor's of Technology (CSE)" name="Dr APJ Abdul Kalam Technical University(AKTU)"
          time="2017-2021" place="Lucknow, Uttar Pradesh" 
          info="First Divison with 78%"
          />
           <Details
          type="Intermediate" name="Shanti Niketan Vidyapith"
          time="2016-2017" place="Meerut, Uttar Pradesh" 
          info="First Divison with 65%"
          />
          <Details
          type="Diploma" name="Jyoti Vidyapeeth Women's University"
          time="2015-2016" place="Jaipur, Rajasthan" 
          info="First year with 70%"
          />
           <Details
          type="High School" name="Lord Mahavira Academy"
          time="2014-2015" place="Saharanpur, Uttar Pradesh" 
          info="First Divison with 7.8 CGPA"
          />
        </ul>
      </div>
    </div>
  )
}

export default Education

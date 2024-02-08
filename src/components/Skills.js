import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import htmlicon from '../../public/images/icons/htmlicon.png';
import cssicon from '../../public/images/icons/cssicon.png';
import jsicon from '../../public/images/icons/jsicon.png';
import angular from '../../public/images/icons/angular.png';
import nodejs from '../../public/images/icons/nodejs.png';
import phplogo from '../../public/images/icons/phplogo.png';
import python from '../../public/images/icons/python.png';
import figmalogo from '../../public/images/icons/figmalogo.png';
import giticon from '../../public/images/icons/giticon.png';
import reactlogo from '../../public/images/icons/reactlogo.png';
import sqllogo from '../../public/images/icons/sqllogo.png';
import tailwind from '../../public/images/icons/tailwind.png';
import bootstrap from '../../public/images/icons/bootstrap.png';
import nexticon from '../../public/images/icons/nexticon.png';


const Skill = ({name, x, y, imageSrc}) => {
return(
  <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold '
whileHover={{scale:1.05}}
initial={{x:0, y:0}}
animate={{ x:x, y:y }}
transition={{duration:1.5}}
>
<Image src={imageSrc} alt={name} width={32} height={32}  className="w-6 h-6 mr-2 rounded-full xs:w-3 xs:h-3 xs:mr-0" />
  {name}
</motion.div>
)
}

const Skillmob = ({name, imageSrc}) => {
  return(
  <div className=''>
    <Image src={imageSrc} alt={name} className="w-10 h-10 m-4" />
  </div>
  )
  }

const Skills = () => {
  return (
    <>
<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>TechStack</h2>
<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
lg:h-[80vh] 
lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
md:hidden
'>
<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs-p-2 
'
whileHover={{scale:1.05}}
>
  Web
</motion.div>
<Skill name ="HTML" x="-20vw" y="2vw" imageSrc={htmlicon} />
<Skill name ="CSS" x="-5vw" y="-10vw" imageSrc={cssicon} />
<Skill name ="Javascript" x="-3vw" y="-20vw" imageSrc={jsicon} />
<Skill name ="ReactJS" x="0vw" y="12vw"imageSrc={reactlogo} />
<Skill name ="NextJS" x="-20vw" y="-15vw" imageSrc={nexticon} />
<Skill name ="AngularJS" x="15vw" y="-12vw" imageSrc={angular} />
<Skill name ="NodeJS" x="32vw" y="-5vw"imageSrc={nodejs} />
<Skill name ="PHP" x="0vw" y="20vw"imageSrc={phplogo} />
<Skill name ="Python-Django" x="-25vw" y="18vw" imageSrc={python} />
<Skill name ="Figma" x="18vw" y="18vw" imageSrc={figmalogo}/>
<Skill name ="Tailwind" x="15vw" y="-5vw"imageSrc={tailwind} />
<Skill name ="Bootstrap" x="25vw" y="10vw" imageSrc={bootstrap} />
<Skill name ="Git" x="-25vw" y="10vw" imageSrc={giticon} />
<Skill name ="SQL" x="-30vw" y="-10vw" imageSrc={sqllogo}/>
</div>
<div className="md:visible md:flex md:flex-wrap md:justify-between md:items-center md:mt-8 lg:hidden xl:hidden xxxl:hidden xxl:hidden">
    <Skillmob  imageSrc={htmlicon} />
    <Skillmob imageSrc={cssicon} />
    <Skillmob  imageSrc={jsicon}/>
    <Skillmob  imageSrc={reactlogo}/>
    <Skillmob imageSrc={nexticon}/>
    <Skillmob imageSrc={angular}/>
    <Skillmob imageSrc={nodejs}/>
    <Skillmob imageSrc={phplogo}/>
    <Skillmob  imageSrc={python}/>
    <Skillmob  imageSrc={figmalogo}/>
    <Skillmob  imageSrc={tailwind}/>
    <Skillmob  imageSrc={bootstrap}/>
    <Skillmob imageSrc={giticon}/>
    <Skillmob imageSrc={sqllogo}/>
</div>


    </>
  )
}

export default Skills
